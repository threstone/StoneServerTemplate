// // eslint-disable-next-line max-classes-per-file
// import { PlayerPto, RolePto } from '../../../../../../../common/proto/CommonProto';
// import { PlayerUtils } from '../../../../../../../common/utils/PlayerUtils';
// import { Cfg } from '../../../../../core/config/Cfg';
// import { GlobalVar } from '../../GlobalVar';
// import { Room, RoomPlayer } from '../../room/Room';
// import { MatchUser } from '../MatchUser';
// import { BaseMatchComponent } from './BaseMatchComponent';

// /** 联机作战的机器人组件 */
// export class TeamFightRobotAdd extends BaseMatchComponent {
//     logicRun(): void {
//         const { users, userSet } = this.matcher;
//         if (users.length < 1) { return; }
//         for (let index = users.length - 1; index >= 0; index--) {
//             const user = users[index];
//             const cfg = Cfg.TeamFightRobot.get(user.rank);
//             if (!cfg) {
//                 continue;
//             }
//             const { robotTime, waitingRange } = cfg;
//             const timeLine = Date.now() - robotTime - Math.random() * waitingRange;
//             if (user.startTime < timeLine) {
//                 this.matchRobot(user);
//                 users.splice(index, 1);
//                 userSet.delete(user.roomPlayer.userId);
//             }
//         }
//     }

//     private async matchRobot(user: MatchUser) {
//         logger.debug('匹配到机器人');
//         // eslint-disable-next-line no-use-before-define
//         const robot = new Robot();
//         await robot.initBattlePlayer(user.roomPlayer);
//         robot.setLeaveTask(user.room);
//         user.room.matchSuccess(user, robot);
//     }
// }

// const robotRoom = { leaveRoom: () => { } } as any;
// class Robot implements MatchUser {
//     roomPlayer: RoomPlayer;

//     room: Room = robotRoom;

//     startTime: number;

//     async initBattlePlayer(roomPlayer: RoomPlayer) {
//         const battlePlayer: PlayerPto.IBattlePlayer = await PlayerUtils.getBattlePlayer(roomPlayer.userId,
//             GlobalVar.redisMgr, GlobalVar.sequelizeDbMgr);
//         this.roomPlayer = {
//             ...roomPlayer, userId: `robot${roomPlayer.userId}`, nickname: '我不是机器人', logicNode: 'robot', gateNode: 'robot',
//         };
//         roomPlayer.battlePlayer = battlePlayer;

//         // 10000次JSON.parse(JSON.stringify(battlePlayer))用时283.627ms 2025/5/23
//         // console.time('init robot');
//         // for (let index = 0; index < 10000; index++) {
//         //     this.roomPlayer.battlePlayer = JSON.parse(JSON.stringify(battlePlayer));
//         // }
//         // console.timeEnd('init robot');

//         const robotBattlePlayer = JSON.parse(JSON.stringify(battlePlayer));
//         robotBattlePlayer.baseInfo = { ...battlePlayer.baseInfo, ...this.roomPlayer };
//         this.roomPlayer.battlePlayer = robotBattlePlayer;

//         this.botBlur();
//     }

//     /** 模糊化机器人 */
//     private botBlur() {
//         // 上阵角色进行同品质替换
//         const { battlePlayer } = this.roomPlayer;
//         const { roleMap } = battlePlayer.roleInfo;
//         const { fightList } = battlePlayer.roleInfo.fightListMap[RolePto.FightTypeEnum.TeamFight];
//         const newFightList = [];

//         // 确定每个品质有多少个
//         const randCountMap = new Map<number, number>();
//         const qualityRolesMap = new Map<number, number[]>();
//         for (let index = 0; index < fightList.length; index++) {
//             const roleId = fightList[index];
//             if (roleId === 0) {
//                 newFightList.push(0);
//                 continue;
//             }
//             const roleCfg = Cfg.Role.get(roleId);
//             randCountMap.set(roleCfg.quality, (randCountMap.get(roleCfg.quality) || 0) + 1);
//             const qualityRoles = (qualityRolesMap.get(roleCfg.quality) || []);
//             qualityRoles.push(roleId);
//             qualityRolesMap.set(roleCfg.quality, qualityRoles);
//         }

//         // 设置出战信息到组队出战阵容
//         battlePlayer.roleInfo.fightListMap[RolePto.FightTypeEnum.TeamFight].fightList = newFightList;

//         randCountMap.forEach((count, quality) => {
//             // 用于防止替换出相同的角色
//             const saveQualityRoles = [...Cfg.Role.filter({ quality, type: 2 })];
//             for (let index = 0; index < count; index++) {
//                 const randonIndex = Math.floor(Math.random() * saveQualityRoles.length);
//                 const newRoleId = saveQualityRoles[randonIndex].id;
//                 newFightList.unshift(newRoleId);
//                 saveQualityRoles.splice(randonIndex, 1);
//                 const replaceRoleId = qualityRolesMap.get(quality).shift();
//                 roleMap[newRoleId] = { ...roleMap[replaceRoleId], id: newRoleId };
//             }
//         });
//     }

//     setLeaveTask(room: Room) {
//         // 30秒后离开房间
//         setTimeout(() => {
//             room.leaveRoom(this.roomPlayer.userId);
//         }, 30000);
//     }
// }
