// 必须使用string是因为这里是用来做事件派发的,只能string | symbol
export enum EventEnum {
    LogicInitComplete = 'LogicInitComplete',
    BeforeNewDay = 'BeforeNewDay', // 新的一天开始前十分钟触发
    NewDay = 'NewDay',
    AfterNewDay = 'AfterNewDay', // 新的一天十分钟后触发
    NewWeek = 'NewWeek',
    NewMonth = 'NewMonth',
    Online = "Online",
    Offline = "Offline",
    DayFirstLogin = "DayFirstLogin",
    ItemExpire = 'ItemExpire',
    ItemChange = 'ItemChange',
    /** 道具恢复 */
    ItemRecover = 'ItemRecover',
    AddFriend = 'AddFriend',
    DeleteFriend = 'DeleteFriend',
    NewFriendAddReq = 'NewFriendAddReq',
    NewEmail = 'NewEmail',
    /** 派发此事件将会更新redis中的玩家信息 */
    UpdateRedisInfo = 'UpdateRedisInfo',
}

// 使用string方便数据库阅读,json都用了,无所谓这么点大小的区别了
export enum DictEnum {
    DropPoolTimes = 'DropPoolTimes', // 掉落库抽取信息
}