declare var serviceConfig: {
    loginKey: string
    signKey: string
    ssl: { key: string, cert: string }
    mysql: IMysqlOption
    redis: IRedisOption
    projectName: string
    loginServerPort: number
    manageServerPort: number
    orderServerPort: number
    language: string
    platformDatabase: string
    gameDatabase: string
    isAlterModel: boolean
    isHd: boolean
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