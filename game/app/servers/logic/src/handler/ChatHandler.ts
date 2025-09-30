// import { Cfg } from '../../../../core/config/Cfg';
// import { ChatPto } from '../../../../../../common/proto/CommonProto';
// import { DictEnum } from '../../../../Enum';
// import { ChatComponent } from '../core/component/ChatComponent';
// import { DictionaryComponent } from '../core/component/DictionaryComponent';
// import { PlayerComponent } from '../core/component/PlayerComponent';
// import { Player } from '../core/player/Player';
// import { SensitiveTool } from '../core/SensitiveTool';
// import { LogicSession } from '../core/session/LogicSession';
// import { MessageHandler } from '../../../../core/proto/ProtoDecorator';

// export class ChatHandler {
//     // 请求私聊信息
//     @MessageHandler(ChatPto.C_PRIVATE_CHAT_INFO)
//     async getFriendMessageInfo(session: LogicSession, player: Player) {
//         const chatComp = player.getComponent(ChatComponent);
//         const playerComp = player.getComponent(PlayerComponent);
//         const dicComp = player.getComponent(DictionaryComponent);

//         const chatReadInfo = dicComp.getValue(DictEnum.PrivateChatReadTime, {});
//         const { privateChatMap } = chatComp;
//         const tasks = [];

//         const notify = new ChatPto.S_PRIVATE_CHAT_INFO();
//         privateChatMap.forEach((messages, friendId) => {
//             tasks.push(playerComp.getPlayerInfoByUserId(friendId).then((friendInfo) => {
//                 notify.privateChats.push({
//                     userId: friendId,
//                     messages: messages.map((m) => m.toJSON()),
//                     lastReadTime: chatReadInfo[friendId] || 0,
//                     nickname: friendInfo.nickname,
//                     icon: friendInfo.icon,
//                     lv: friendInfo.lv,
//                     title: friendInfo.title,
//                     iconBg: friendInfo.iconBg,
//                     chatBg: friendInfo.chatBg,
//                 });
//             }));
//         });
//         await Promise.all(tasks);
//         session.sendMessage(notify);
//     }

//     // 请求更新私聊的最后查看时间
//     @MessageHandler(ChatPto.C_UPDATE_READ_TIME)
//     updateReadTime(session: LogicSession, player: Player, msg: ChatPto.C_UPDATE_READ_TIME) {
//         const chatComp = player.getComponent(ChatComponent);
//         if (!chatComp.privateChatMap.get(msg.userId)) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }
//         const dicComp = player.getComponent(DictionaryComponent);
//         const chatReadInfo = dicComp.getValue(DictEnum.PrivateChatReadTime, {});

//         const now = Date.now();
//         chatReadInfo[msg.userId] = now;
//         dicComp.setValue(DictEnum.PrivateChatReadTime, chatReadInfo);
//         dicComp.save();

//         session.sendMessage(new ChatPto.S_UPDATE_READ_TIME({ userId: msg.userId, lastReadTime: now }));
//     }

//     // 请求获取指定类型的聊天信息,私聊类型除外
//     @MessageHandler(ChatPto.C_GET_CHATS_BY_TYPE)
//     async getChatsByType(session: LogicSession, player: Player, msg: ChatPto.C_GET_CHATS_BY_TYPE) {
//         if (msg.chatType === ChatPto.ChatTypeEnum.Private || !msg.count) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }
//         const chatComp = player.getComponent(ChatComponent);
//         const records = await chatComp.getChatRecordsByType(msg.chatType, msg.count);
//         const notify = new ChatPto.S_GET_CHATS_BY_TYPE({ chatType: msg.chatType });
//         records.forEach((r) => {
//             notify.messages.push(JSON.parse(r));
//         });
//         session.sendMessage(notify);
//     }

//     // 请求注册指定类型的聊天信息,私聊类型除外
//     @MessageHandler(ChatPto.C_REGISTER_CHAT_LISTENER)
//     regiesteChatListener(session: LogicSession, player: Player, msg: ChatPto.C_REGISTER_CHAT_LISTENER) {
//         if (msg.chatType === ChatPto.ChatTypeEnum.Private) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }
//         switch (msg.chatType) {
//             case ChatPto.ChatTypeEnum.Server:
//             case ChatPto.ChatTypeEnum.Recruitment:
//             case ChatPto.ChatTypeEnum.Guild:
//             case ChatPto.ChatTypeEnum.Room:
//                 player.getComponent(ChatComponent).doRegisterChatListener(msg.chatType);
//                 break;
//             default:
//                 session.sendErrorMessage('参数错误');
//                 return;
//         }
//         session.sendMessage(new ChatPto.S_REGISTER_CHAT_LISTENER({ chatType: msg.chatType }));
//     }

//     // 请求发送聊天信息
//     @MessageHandler(ChatPto.C_SEND_CHAT_MESSAGE)
//     sendChatMessage(session: LogicSession, player: Player, msg: ChatPto.C_SEND_CHAT_MESSAGE) {
//         const chatConfig = Cfg.Chat.get(msg.chatType);
//         if (!chatConfig) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }

//         // 2类型不过滤
//         if (msg.clientType !== 2) {
//             msg.content = SensitiveTool.ins().filter(msg.content, '喵');
//         }

//         if (msg.content.length > chatConfig.maxLen) {
//             session.sendErrorMessage('超出字数限制');
//             return;
//         }
//         const chatComp = player.getComponent(ChatComponent);
//         if (Date.now() - chatComp.getLastSendMsgTime(msg.chatType) < chatConfig.chatInterval) {
//             session.sendErrorMessage('请求过于频繁');
//             return;
//         }

//         if (Cfg.FuncDesc.openCheck(chatConfig.open, player) === false) {
//             session.sendErrorMessage('不满足条件');
//             return;
//         }

//         switch (msg.chatType) {
//             case ChatPto.ChatTypeEnum.Server:
//                 chatComp.sendMsgToChannel(msg.content, msg.chatType, msg.clientType, true, player.serverId.toString());
//                 break;
//             case ChatPto.ChatTypeEnum.Private:
//                 chatComp.sendPrivateChat(msg.reciverInfo, msg.content, msg.clientType);
//                 break;
//             case ChatPto.ChatTypeEnum.Recruitment:
//                 chatComp.sendMsgToChannel(msg.content, msg.chatType, msg.clientType, true);
//                 break;
//             case ChatPto.ChatTypeEnum.Guild:
//                 chatComp.sendMsgToChannel(msg.content, msg.chatType, msg.clientType, true, 'todo');
//                 break;
//             case ChatPto.ChatTypeEnum.Room:
//                 chatComp.sendMsgToChannel(msg.content, msg.chatType, msg.clientType, false);
//                 break;
//             default:
//                 session.sendErrorMessage('参数错误');
//         }
//     }

//     // 请求删除私聊
//     @MessageHandler(ChatPto.C_DELETE_PRIVATE_CHAT)
//     deletePrivateChat(session: LogicSession, player: Player, msg: ChatPto.C_DELETE_PRIVATE_CHAT) {
//         player.getComponent(ChatComponent).deletePrivateChat(msg.userId);
//     }
// }
