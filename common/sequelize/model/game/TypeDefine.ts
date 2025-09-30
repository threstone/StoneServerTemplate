export class TimeData {
    lastUpdateTime: number = Date.now();
    // 道具获取数量记录
    itemAccumulatedCountRecord: { [key: number]: number } = {};
}

export class DayInfo extends TimeData {
    isOnline: boolean = false;
    friendsGiveTimes: number = 0; // 领取他人的次数
    sendGiftRecords: string[] = []; // 发送礼物记录
}

export class WeekInfo extends TimeData {

}

export class MonthInfo extends TimeData {

}

export class ItemInfo {
    isInit: boolean = false;
    itemDatas: { [key: number]: IItem } = {};
}

export interface IItem {
    itemId?: number
    count?: number
    isNew?: boolean
    expireTime?: number
    nextRecoverTime?: number
}