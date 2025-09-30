
declare interface RpcRouterOptions {
    type?: number | 0/* random */ | 1/* target */ | 2/* all */;
    nodeId?: string;
}
        
declare class rpc {
    static gate: typeof Gate;
    static logic: typeof Logic;
    static match: typeof Match;
}

declare class Gate {
    static gateRemote: typeof Gate_GateRemote;
}

declare class Logic {
    static channelRemote: typeof Logic_ChannelRemote;
    static playerRemote: typeof Logic_PlayerRemote;
    static transferRemote: typeof Logic_TransferRemote;
}

declare class Match {
}

declare class Gate_GateRemote {
    static callSendMessage(routeOption: RpcRouterOptions, sessionId: number, buff: Buffer): Promise<void>;
    static sendSendMessage(routeOption: RpcRouterOptions, sessionId: number, buff: Buffer): void;
    static callKick(routeOption: RpcRouterOptions, sessionId: number, reason?: string): Promise<void>;
    static sendKick(routeOption: RpcRouterOptions, sessionId: number, reason?: string): void;
    static callKickWithBuffer(routeOption: RpcRouterOptions, sessionId: number, buffer: Buffer): Promise<void>;
    static sendKickWithBuffer(routeOption: RpcRouterOptions, sessionId: number, buffer: Buffer): void;
}

declare class Logic_ChannelRemote {
    static callBroadcastChannelMsg(routeOption: RpcRouterOptions, channelName: string, buffer: Buffer): Promise<void>;
    static sendBroadcastChannelMsg(routeOption: RpcRouterOptions, channelName: string, buffer: Buffer): void;
}

declare class Logic_PlayerRemote {
    static callOnPlayerRegister(routeOption: RpcRouterOptions, 
        gateNodeId: string,
        sessionId: number,
        uuid: string,
        ip: string,
        serverId: number,
        isRecovery: boolean,
        province: string,
    ): Promise<boolean>;
    static sendOnPlayerRegister(routeOption: RpcRouterOptions, 
        gateNodeId: string,
        sessionId: number,
        uuid: string,
        ip: string,
        serverId: number,
        isRecovery: boolean,
        province: string,
    ): void;
    static callOnPlayerSocketClose(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number): Promise<void>;
    static sendOnPlayerSocketClose(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number): void;
    static callNotifyPlayerEvent(routeOption: RpcRouterOptions, userId: string, serverId: number, eventName: string, ...data: any[]): Promise<void>;
    static sendNotifyPlayerEvent(routeOption: RpcRouterOptions, userId: string, serverId: number, eventName: string, ...data: any[]): void;
}

declare class Logic_TransferRemote {
    static callHandleMessage(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number, uuid: string, buff: Buffer): Promise<void>;
    static sendHandleMessage(routeOption: RpcRouterOptions, gateNodeId: string, sessionId: number, uuid: string, buff: Buffer): void;
}
