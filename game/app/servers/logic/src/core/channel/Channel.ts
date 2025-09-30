import { RpcRouteType } from 'stone-framework';
import { Player } from '../player/Player';
import { ProtoBufEncoder } from '../../../../../../../common/proto/ProtoBufEncoder';

export class Channel {
    channelName: string;

    private _playerSet = new Set<Player>();

    constructor(channelName: string) {
        this.channelName = channelName;
    }

    add(player: Player) {
        this._playerSet.add(player);
    }

    remove(player: Player) {
        this._playerSet.delete(player);
    }

    sendMessageToChannel(message: IGameMessage) {
        logger.debug(`广播频道消息 channelName : ${this.channelName} , ${message.constructor.name} : ${JSON.stringify(message)}`);
        rpc.logic.channelRemote.sendBroadcastChannelMsg({ type: RpcRouteType.All }, this.channelName, ProtoBufEncoder.encode(message));
    }

    broadcastBuffer(buffer: Buffer) {
        this._playerSet.forEach((player) => {
            player.sendBuffer(buffer);
        });
    }
}
