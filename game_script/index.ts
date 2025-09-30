declare class IGameMessage {
    cmd: number
    scmd: number
    toJSON(): { [k: string]: any };
}
