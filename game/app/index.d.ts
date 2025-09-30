declare var serviceConfig: {
    ssl: { key: string, cert: string }
    isTransferSSL: boolean
    mysql: IMysqlOption
    redis: IRedisOption
    projectName: string
    isTest: boolean
    isChargeTest: boolean
    cloudConfigPath: string
    language: string
    platformDatabase: string
    gameDatabase: string
    isAlterModel:boolean
}
declare class IGameMessage {
    cmd: number
    scmd: number
    toJSON(): { [k: string]: any };
}

declare interface IMysqlOption {
    host: string
    port: number
    user: string
    password: string
    timezone: string
}

declare interface IRedisOption {
    host: string
    port: number
    user: string
    password: string
    enableOfflineQueue: boolean
}