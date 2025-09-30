import { RpcRouteType } from 'stone-framework';
import { GlobalVar } from '../../GlobalVar';
import { Player } from '../player/Player';
import { BaseComponent } from './BaseComponent';
import { EventEnum } from '../../../../../Enum';
import { ProtoBufEncoder } from '../../../../../../../common/proto/ProtoBufEncoder';

export class ChannelComponent extends BaseComponent {
    private _channelSet = new Set<string>();

    private _serverChannelName: string;

    get serverChannelName() { return this._serverChannelName; }

    constructor(player: Player) {
        // 指定本组件是必要组件,需优先加载
        super(player, true);
    }

    protected init(player: Player) {
        player.on(EventEnum.Online, this.changeListener.bind(this, true), this);
        player.on(EventEnum.Offline, this.changeListener.bind(this, false), this);
    }

    protected onPlayerInitEnd(): void {
        this._serverChannelName = `ServerChannel${this.player.serverId}`;
        this.addChannel('OnlinePlayer');
        this.addChannel(this._serverChannelName);
    }

    protected onDestroy() {
        this._channelSet.forEach((channelName) => {
            GlobalVar.channelMgr.removeFromChannel(channelName, this.player);
        });
        this._channelSet.clear();
    }

    private changeListener(enable: boolean) {
        const func = (enable ? GlobalVar.channelMgr.addToChannel : GlobalVar.channelMgr.removeFromChannel).bind(GlobalVar.channelMgr);
        this._channelSet.forEach((channelName) => {
            func(channelName, this.player);
        });
    }

    addChannel(channelName: string) {
        if (this._channelSet.has(channelName)) { return; }

        this._channelSet.add(channelName);
        if (this.player.playerInfo.online) {
            GlobalVar.channelMgr.addToChannel(channelName, this.player);
        }
    }

    removeFromChannel(channelName: string) {
        if (this._channelSet.has(channelName) === false) { return; }

        this._channelSet.delete(channelName);
        if (this.player.playerInfo.online) {
            GlobalVar.channelMgr.removeFromChannel(channelName, this.player);
        }
    }

    sendMessageToChannel(channelName: string, message: IGameMessage) {
        rpc.logic.channelRemote.sendBroadcastChannelMsg(
            { type: RpcRouteType.All },
            channelName,
            ProtoBufEncoder.encode(message),
        );
    }
}
