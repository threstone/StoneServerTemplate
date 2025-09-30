import { Op } from 'sequelize';
import { RoleModel } from '../../../../../../common/sequelize/model/platform/RoleModel';
import { FriendPto } from '../../../../../../common/proto/CommonProto';
import { MessageHandler } from '../../../../core/proto/ProtoDecorator';
import { FriendComponent } from '../core/component/FriendComponent';
import { PlayerComponent } from '../core/component/PlayerComponent';
import { Player } from '../core/player/Player';
import { LogicSession } from '../core/session/LogicSession';
import { GlobalVar } from '../GlobalVar';
import { Cfg } from '../../../../core/config/Cfg';
import { DayComponent } from '../core/component/DayComponent';
import { ItemComponent } from '../core/component/ItemComponent';
import { ProtoBufEncoder } from '../../../../../../common/proto/ProtoBufEncoder';

const MaxSendCount = 10;
const BlockMaxCount = 20;
const FriendMaxCount = 100;

export class FriendHandler {
    // 请求好友信息
    @MessageHandler(FriendPto.C_FRIEND_INFO)
    async getFriendInfo(session: LogicSession, player: Player) {
        const friendComp = player.getComponent(FriendComponent);
        const { day } = player.getComponent(DayComponent);

        const notify = new FriendPto.S_FRIEND_INFO({
            friendsGiveTimes: day.friendsGiveTimes,
            sendGiftRecords: day.sendGiftRecords,
        });
        const tasks: Promise<any>[] = [];
        // 好友列表
        friendComp.friendList.forEach((friend) => {
            tasks.push(player.getPlayerInfoByUserId(friend.friendUserId).then((friendInfo) => {
                if (friendInfo) {
                    notify.friendList.push(friendInfo);
                }
            }));
        });
        // 好友请求列表
        friendComp.friendReqList.forEach((friendReq) => {
            tasks.push(player.getPlayerInfoByUserId(friendReq.targetUserId).then((friendReqInfo) => {
                if (friendReqInfo) {
                    notify.friendRequestList.push({ ...friendReqInfo, time: friendReq.time });
                }
            }));
        });

        // 黑名单列表
        friendComp.blockList.forEach((blockPlayer) => {
            tasks.push(player.getPlayerInfoByUserId(blockPlayer.targetUserId).then((blockPlayerInfo) => {
                if (blockPlayerInfo) {
                    notify.blockList.push({ ...blockPlayerInfo });
                }
            }));
        });

        tasks.push(new Promise<void>(async (resolve) => {
            const redisClient = await GlobalVar.redisMgr.getClient();
            const redisKey = `friendGiftUserIds:${player.userId}`;
            notify.friendGiftUserIds = await redisClient.smembers(redisKey);
            resolve();
        }));

        await Promise.all(tasks);
        session.sendMessage(notify);
    }

    // 请求搜索玩家
    @MessageHandler(FriendPto.C_SEARCH_PLAYER, { reqInterval: 10000 })
    async searchPlayer(session: LogicSession, player: Player, msg: FriendPto.C_SEARCH_PLAYER) {
        //  搜索要加搜索间隔 、 一层redis缓存
        const redisClient = await GlobalVar.redisMgr.getClient(1);
        const redisKey = `friend_search_player:${msg.searchKey}`;
        let userId = await redisClient.getData(redisKey);
        if (!userId) {
            const roleModel = await GlobalVar.sequelizeDbMgr.getPlatformModel(RoleModel);
            const roleInfo = await roleModel.findOne({ where: { [Op.or]: [{ userId: msg.searchKey }, { nickname: msg.searchKey }] } });
            if (roleInfo) {
                userId = roleInfo.userId;
                redisClient.setData(redisKey, userId, 60 * 5);
            }
        }

        const notify = new FriendPto.S_SEARCH_PLAYER();
        if (userId) {
            const playerInfo = await player.getPlayerInfoByUserId(userId);
            notify.player = playerInfo;
        }
        session.sendMessage(notify);
    }

    /**
     * 获取同服的玩家
     * 请求获取可能认识的玩家
     * 在线玩家以在线时间戳作为score插入redis有序列表中,随机获取几个玩家返回给前端
     */
    @MessageHandler(FriendPto.C_GET_POSSIBLE_FRIENDS, { reqInterval: 2000 })
    async getPossibleFriends(session: LogicSession, player: Player) {
        const friendComp = player.getComponent(FriendComponent);
        const userIdSet = await friendComp.getPossibleFriends();
        const notify = new FriendPto.S_GET_POSSIBLE_FRIEND();
        const tasks = [];
        userIdSet.forEach((userId) => {
            tasks.push(player.getPlayerInfoByUserId(userId).then((friendInfo) => {
                if (friendInfo) {
                    notify.friendList.push(friendInfo);
                }
            }));
        });
        await Promise.all(tasks);
        session.sendMessage(notify);
    }

    // 请求添加好友
    @MessageHandler(FriendPto.C_REQ_ADD_FRIEND, { reqInterval: 1000 })
    async reqAddFriend(session: LogicSession, player: Player, msg: FriendPto.C_REQ_ADD_FRIEND) {
        if (msg.userId == null || msg.userId === player.userId) {
            session.sendErrorMessage('参数错误');
            return;
        }

        const friendComp = player.getComponent(FriendComponent);
        if (friendComp.friendList.length >= FriendMaxCount) {
            session.sendErrorMessage('已达上限');
            return;
        }
        if (friendComp.isFriend(msg.userId)) {
            session.sendErrorMessage('重复请求');
            return;
        }

        // 请求添加拉黑的好友
        if (friendComp.blockList.find((f) => f.targetUserId === msg.userId)) {
            session.sendErrorMessage('不满足条件');
            return;
        }

        if (await friendComp.isTargetBlocker(msg.userId)) {
            session.sendErrorMessage('被对方拉黑');
            return;
        }

        // 检查是否拥有此玩家
        const userInfo = await player.getPlayerInfoByUserId(msg.userId);
        if (!userInfo) {
            session.sendErrorMessage('参数错误');
            return;
        }

        await friendComp.addFriendReq(msg.userId);
        session.sendMessage(new FriendPto.S_REQ_ADD_FRIEND({ userId: msg.userId }));
    }

    // 处理好友请求
    @MessageHandler(FriendPto.C_HANDLE_FRIEND_REQUEST)
    async handleFriendRequest(session: LogicSession, player: Player, msg: FriendPto.C_HANDLE_FRIEND_REQUEST) {
        if (msg.userIds.length > FriendMaxCount) {
            session.sendErrorMessage('参数错误');
            return;
        }
        const friendComp = player.getComponent(FriendComponent);
        const notify = new FriendPto.S_HANDLE_FRIEND_REQUEST({ isAccept: msg.isAccept });
        let curFriendCount = friendComp.friendList.length;
        while (msg.userIds.length > 0 && curFriendCount < FriendMaxCount) {
            const userId = msg.userIds.shift();
            notify.userIds.push(userId);
            const friendReq = friendComp.friendReqList.find((req) => req.targetUserId === userId);
            if (!friendReq) {
                notify.errCodes.push(1);
                continue;
            }
            // 删除好友请求数据
            friendComp.friendReqList.splice(friendComp.friendReqList.indexOf(friendReq), 1);
            friendReq.destroy();
            // 如果是拉黑的好友请求，则直接跳过
            if (friendComp.blockList.find((f) => f.targetUserId === userId)) {
                notify.errCodes.push(2);
                continue;
            }
            if (msg.isAccept) {
                // 已经是好友
                if (friendComp.isFriend(userId)) {
                    notify.errCodes.push(3);
                    continue;
                }

                // 对方好友是否满了
                // eslint-disable-next-line no-await-in-loop
                const targetFriendCount = await friendComp.getTargetFriendCount(userId);
                if (targetFriendCount >= FriendMaxCount) {
                    notify.errCodes.push(5);
                    continue;
                }

                // 是否被对方拉黑
                // eslint-disable-next-line no-await-in-loop
                if (await friendComp.isTargetBlocker(userId)) {
                    notify.errCodes.push(6);
                    continue;
                }

                friendComp.addFriend(userId);
                curFriendCount += 1;
            }
        }

        if (msg.userIds.length > 0) {
            notify.errCodes.push(4);
        }
        if (notify.userIds.length >= 0) {
            session.sendMessage(notify);
        }
    }

    // 删除好友请求
    @MessageHandler(FriendPto.C_DELETE_FRIEND)
    deleteFriend(session: LogicSession, player: Player, msg: FriendPto.C_DELETE_FRIEND) {
        if (msg.userIds.length > FriendMaxCount) {
            session.sendErrorMessage('参数错误');
            return;
        }
        const notify = new FriendPto.S_DELETE_FRIEND();
        // 通知玩家
        const friendComp = player.getComponent(FriendComponent);
        msg.userIds.forEach((userId) => {
            if (friendComp.deleteFriend(userId)) {
                notify.userIds.push(userId);
            }
        });
        if (notify.userIds.length > 0) {
            session.sendMessage(notify);
        }
    }

    // 请求拉黑玩家
    @MessageHandler(FriendPto.C_BLOCK_PLAYER)
    async blockPlayer(session: LogicSession, player: Player, msg: FriendPto.C_BLOCK_PLAYER) {
        const friendComp = player.getComponent(FriendComponent);
        // 拉黑上限逻辑
        if (friendComp.blockList.length >= BlockMaxCount) {
            session.sendErrorMessage('已达上限');
            return;
        }
        const block = friendComp.blockList.find((b) => b.targetUserId === msg.userId);
        if (block) {
            session.sendErrorMessage('重复请求');
            return;
        }

        // 如有好友关系，则先删除好友
        friendComp.deleteFriend(msg.userId);

        const targetPlayer = await player.getPlayerInfoByUserId(msg.userId);
        if (!targetPlayer) {
            session.sendErrorMessage('参数错误');
            return;
        }
        friendComp.blockPlayer(msg.userId, targetPlayer);
    }

    // 取消拉黑请求
    @MessageHandler(FriendPto.C_CANCEL_BLOCK_PLAYER)
    cancelBlockPlayer(session: LogicSession, player: Player, msg: FriendPto.C_CANCEL_BLOCK_PLAYER) {
        const friendComp = player.getComponent(FriendComponent);
        const index = friendComp.blockList.findIndex((b) => b.targetUserId === msg.userId);
        if (index === -1) {
            session.sendErrorMessage('参数错误');
            return;
        }
        const block = friendComp.blockList[index];
        friendComp.blockList.splice(index, 1);
        block.destroy();
        session.sendMessage(new FriendPto.S_DELETE_BLOCK_PLAYER({ userId: msg.userId }));
    }

    // 请求一键赠送
    @MessageHandler(FriendPto.C_SEND_TO_FRIENDS_GIFT)
    sendToFriendsGift(session: LogicSession, player: Player, msg: FriendPto.C_SEND_TO_FRIENDS_GIFT) {
        if (msg.userIds.length === 0) {
            session.sendErrorMessage('参数错误');
            return;
        }

        const dayComp = player.getComponent(DayComponent);
        const { sendGiftRecords } = dayComp.day;

        if (msg.userIds.length + sendGiftRecords.length > MaxSendCount) {
            session.sendErrorMessage('已达上限');
            return;
        }
        const friendComp = player.getComponent(FriendComponent);
        for (let index = 0; index < msg.userIds.length; index++) {
            const userId = msg.userIds[index];
            if (sendGiftRecords.indexOf(userId) !== -1) {
                session.sendErrorMessage('参数错误');
                return;
            }
            if (friendComp.isFriend(userId) === false) {
                session.sendErrorMessage('参数错误');
                return;
            }
        }
        sendGiftRecords.push(...msg.userIds);
        dayComp.save();
        // 通知对方有玩家送礼物了
        const notifyBufferBuffer = ProtoBufEncoder.encode(new FriendPto.S_ON_NEW_FRIEND_GIFT({ friendUserId: player.userId }));
        GlobalVar.redisMgr.getClient().then((redisClient) => {
            msg.userIds.forEach((userId) => {
                const redisKey = `friendGiftUserIds:${userId}`;
                redisClient.sadd(redisKey, player.userId);
                player.sendMessageToPlayer(userId, notifyBufferBuffer);
            });
        });
        session.sendMessage(new FriendPto.S_SEND_TO_FRIENDS_GIFT({ sendGiftRecords }));
    }

    // 请求领取好友的礼物
    @MessageHandler(FriendPto.C_GET_FRIENDS_GIFT)
    async getFriendsGift(session: LogicSession, player: Player, msg: FriendPto.C_GET_FRIENDS_GIFT) {
        const dayComp = player.getComponent(DayComponent);
        const { friendsGiveTimes } = dayComp.day;

        if (msg.userIds.length + friendsGiveTimes > MaxSendCount) {
            session.sendErrorMessage('已达上限');
            return;
        }

        const redisClient = await GlobalVar.redisMgr.getClient();
        const redisKey = `friendGiftUserIds:${player.userId}`;
        const friendGiftUserIds = await redisClient.smembers(redisKey);
        for (let index = 0; index < msg.userIds.length; index++) {
            const userId = msg.userIds[index];
            if (friendGiftUserIds.indexOf(userId) === -1) {
                session.sendErrorMessage('参数错误');
                return;
            }
        }

        redisClient.srem(redisKey, msg.userIds);

        dayComp.day.friendsGiveTimes += msg.userIds.length;
        dayComp.save();

        const rewards = Cfg.Items.getItemsBy2DArray([[1, 1]]);
        Cfg.Items.timesSelf(rewards, msg.userIds.length);

        session.sendMessage(new FriendPto.S_GET_FRIENDS_GIFT({
            friendsGiveTimes: dayComp.day.friendsGiveTimes,
            rewards: player.getComponent(ItemComponent).updateItems(rewards),
        }));
    }
}
