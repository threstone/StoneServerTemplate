import { GlobalVar } from '../GlobalVar';

export class ChannelRemote {
    broadcastChannelMsg(channelName: string, buffer: Buffer): void {
        GlobalVar.channelMgr.handleChannelMessage(channelName, buffer);
    }
}
