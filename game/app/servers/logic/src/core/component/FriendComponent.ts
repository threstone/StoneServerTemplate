import { Op } from 'sequelize';
import { FriendModel } from '../../../../../../../common/sequelize/model/game/FriendModel';
import { FriendReqModel } from '../../../../../../../common/sequelize/model/game/FriendReqModel';
import { BlockPlayerModel } from '../../../../../../../common/sequelize/model/game/BlockPlayerModel';
import { BaseComponent } from './BaseComponent';
import { Player } from '../player/Player';
import { GlobalVar } from '../../GlobalVar';
import { EventEnum } from '../../../../../Enum';
import { FriendPto, PlayerPto } from '../../../../../../../common/proto/CommonProto';
import { TimeMgr } from '../../../../../core/utils/TimeMgr';
import { PlayerComponent } from './PlayerComponent';

export class FriendComponent extends BaseComponent {
    private _FriendModel: typeof FriendModel;

    private _FriendReqModel: typeof FriendReqModel;

    private _BlockListModel: typeof BlockPlayerModel;

    friendReqList: FriendReqModel[];

    friendList: FriendModel[];

    blockList: BlockPlayerModel[];

    get friendCount() { return this.friendList.length; }

    protected async init(player: Player) {
        player.on(EventEnum.AddFriend, this.onNewFriend, this);
        player.on(EventEnum.DeleteFriend, this.onDeleteFriend, this);
        player.on(EventEnum.NewFriendAddReq, this.onNewFriendAddReq, this);
        player.on(EventEnum.Online, this.onOnline, this);

        const gameDb = await GlobalVar.sequelizeDbMgr.getGameDb();
        this._FriendModel = await gameDb.getModel(FriendModel);
        this._FriendReqModel = await gameDb.getModel(FriendReqModel);
        this._BlockListModel = await gameDb.getModel(BlockPlayerModel);
        await Promise.all([
            this.initFriends(),
            this.initFriendReq(),
            this.initBlockList(),
        ]);
    }

    protected onDestroy(): void {
        this.friendReqList = null;
        this.friendList = null;
        this.blockList = null;
    }

    protected onPlayerInitEnd(): void {
    }

    private async initFriends() {
        this.friendList = await this._FriendModel.findAll({ where: { userId: this.player.userId } });
    }

    private async initFriendReq() {
        this.friendReqList = await this._FriendReqModel.findAll({ where: { userId: this.player.userId } });
        const deleteList: number[] = [];
        while (this.friendReqList.length > 50) {
            deleteList.push(this.friendReqList.shift().id);
        }
        if (deleteList.length > 0) {
            this._FriendReqModel.destroy({
                where: {
                    id: {
                        [Op.in]: deleteList,
                    },
                },
            });
        }
    }

    private async initBlockList() {
        this.blockList = await this._BlockListModel.findAll({ where: { userId: this.player.userId } });
    }

    private async onOnline() {
        const redisClient = await GlobalVar.redisMgr.getClient();
        // 将在线数据插入到redis中
        redisClient.zadd(`onlineTime:${this.player.serverId}`, [Date.now(), this.player.userId]);
    }

    async getPossibleFriends() {
        const set = new Set<string>();
        const tasks = [];
        tasks.push(this.getActivePlayerByDay(1).then((userId) => {
            if (userId) { set.add(userId); }
        }));
        tasks.push(this.getActivePlayerByDay(3).then((userId) => {
            if (userId) { set.add(userId); }
        }));
        tasks.push(this.getActivePlayerByDay(7).then((userId) => {
            if (userId) { set.add(userId); }
        }));
        await Promise.all(tasks);
        return set;
    }

    private async getActivePlayerByDay(day: number) {
        const redisClient = await GlobalVar.redisMgr.getClient();

        const redisKey = `onlineTime:${this.player.serverId}`;
        const now = Date.now();
        const timeStart = now - day * TimeMgr.dayMs;
        const playerCount = await redisClient.zcount(redisKey, timeStart, now);
        if (playerCount === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * playerCount);
        const userIds = await redisClient.zrevrange(redisKey, randomIndex, randomIndex + 2) as string[];
        for (let index = 0; index < userIds.length; index++) {
            const userId = userIds[index];
            if (userId === this.player.userId) { continue; }
            if (this.blockList.find((b) => b.targetUserId === userId)) { continue; }
            if (this.friendList.find((f) => f.friendUserId === userId) == null) {
                return userId;
            }
        }
        return null;
    }

    deleteFriend(friendUserId: string) {
        const friend = this.friendList.find((f) => f.friendUserId === friendUserId);
        if (!friend) { return false; }
        this.friendList.splice(this.friendList.indexOf(friend), 1);
        // 删除自己的好友关系
        friend.destroy();
        // 删除好友的好友关系
        this._FriendModel.destroy({ where: { userId: friendUserId, friendUserId: this.player.userId } });

        // 通知玩家
        this.player.sendMessage(new FriendPto.S_DELETE_FRIEND({ userIds: [friendUserId] }));
        // emit event to friend
        this.player.emitPlayerEvent(friendUserId, EventEnum.DeleteFriend, this.player.userId);
        return true;
    }

    private async onDeleteFriend(friendUserId: string) {
        const friend = this.friendList.find((f) => f.friendUserId === friendUserId);
        if (!friend) { return; }
        this.friendList.splice(this.friendList.indexOf(friend), 1);
        // 通知玩家
        this.player.sendMessage(new FriendPto.S_DELETE_FRIEND({ userIds: [friendUserId] }));
    }

    async addFriend(friendUserId: string) {
        const now = Date.now();
        const [friend] = await this._FriendModel.bulkCreate([{
            userId: this.player.userId,
            friendUserId,
            time: now,
        }, {
            userId: friendUserId,
            friendUserId: this.player.userId,
            time: now,
        }]);
        this.friendList.push(friend);
        // emit event to friend
        this.player.emitPlayerEvent(friendUserId, EventEnum.AddFriend, this.player.userId);

        // 通知玩家
        const friendReqInfo = await this.player.getPlayerInfoByUserId(friendUserId);
        this.player.sendMessage(new FriendPto.S_NEW_FRIEND({ friend: friendReqInfo }));
    }

    /** 通知新的好友请求 */
    private async onNewFriend(friendUserId: string) {
        const hasFriend = this.friendList.find((f) => f.friendUserId === friendUserId);
        if (hasFriend) { return; }

        const friend = await this._FriendModel.findOne({ where: { userId: this.player.userId, friendUserId } });
        if (friend) {
            this.friendList.push(friend);
            const friendReqInfo = await this.player.getPlayerInfoByUserId(friendUserId);
            this.player.sendMessage(new FriendPto.S_NEW_FRIEND({ friend: friendReqInfo }));
        }
    }

    async addFriendReq(friendUserId: string) {
        const count = await this._FriendReqModel.count({ where: { userId: friendUserId, targetUserId: this.player.userId } });
        if (count !== 0) {
            return;
        }

        const req = new this._FriendReqModel({
            userId: friendUserId,
            targetUserId: this.player.userId,
            time: Date.now(),
        });
        await req.save();
        // emit event to friend
        this.player.emitPlayerEvent(friendUserId, EventEnum.NewFriendAddReq, this.player.userId);
    }

    /** 通知新的好友请求 */
    private async onNewFriendAddReq(reqUserId: string) {
        const hasReq = this.friendReqList.find((r) => r.targetUserId === reqUserId);
        if (hasReq) { return; }

        const req = await this._FriendReqModel.findOne({ where: { userId: this.player.userId, targetUserId: reqUserId } });
        if (!req) { return; }

        this.friendReqList.push(req);
        const friendReqInfo = await this.player.getPlayerInfoByUserId(req.targetUserId);
        if (friendReqInfo) {
            this.player.sendMessage(new FriendPto.S_NEW_FRIEND_REQ({ friendReq: { ...friendReqInfo, time: req.time } }));
        }
    }

    blockPlayer(userId: string, playerInfo: PlayerPto.IPlayerInfo) {
        if (this.blockList.find((b) => b.targetUserId === userId)) {
            return;
        }

        const block = new this._BlockListModel({
            userId: this.player.userId,
            targetUserId: userId,
            time: Date.now(),
        });
        block.save();
        this.blockList.push(block);

        // 通知玩家
        this.player.sendMessage(new FriendPto.S_NEW_BLOCK_PLAYER({ blockPlayer: playerInfo }));
    }

    /** 获取目标的好友数量 */
    getTargetFriendCount(userId: string) {
        return this._FriendModel.count({ where: { userId } });
    }

    /** 是否是目标的黑名单用户 */
    async isTargetBlocker(targetUserId: string) {
        const count = await this._BlockListModel.count({ where: { userId: targetUserId, targetUserId: this.player.userId } });
        return count > 0;
    }

    isFriend(userId: string) {
        return this.friendList.find((f) => f.friendUserId === userId) != null;
    }
}
