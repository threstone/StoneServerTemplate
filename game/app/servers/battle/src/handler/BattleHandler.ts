// import { BattlePto } from '../../../../../../common/proto/CommonProto';
// import { MessageHandler } from '../../../../core/proto/ProtoDecorator';
// import { BattleSession } from '../BattleSession';

// export class BattleHandler {
//     // 客户端准备完成
//     @MessageHandler(BattlePto.C_BATTLE_READY)
//     playerReady(session: BattleSession) {
//         session.battleTable?.onPlayerReady(session);
//     }

//     // 客户端逻辑操作
//     @MessageHandler(BattlePto.C_BATTLE_LOGIC)
//     battleLogic(session: BattleSession, msg: BattlePto.C_BATTLE_LOGIC) {
//         session.battleTable?.addPlayerInput(msg.playerInput);
//     }

//     // 请求战斗结束
//     @MessageHandler(BattlePto.C_BATTLE_END)
//     battleEnd(session: BattleSession) {
//         session.battleTable?.onGameOver();
//     }

//     // 请求重连
//     @MessageHandler(BattlePto.C_BATTLE_RECOVER)
//     recover(session: BattleSession) {
//         session.battleTable?.recover(session);
//     }

//     // 玩家主动退出
//     @MessageHandler(BattlePto.C_PLAYER_EXIT)
//     exit(session: BattleSession) {
//         session.battleTable?.exit(session);
//     }

//     // 玩家表情
//     @MessageHandler(BattlePto.C_EMOJI)
//     emoji(session: BattleSession, msg: BattlePto.C_EMOJI) {
//         session.battleTable?.broadcast(new BattlePto.S_EMOJI({ playerId: msg.playerId, emojiId: msg.emojiId }));
//     }
// }
