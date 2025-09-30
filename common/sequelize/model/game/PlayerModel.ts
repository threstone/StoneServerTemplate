/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import {
    Column, DataType, Table,
} from 'sequelize-typescript';
import { BaseModel } from '../BaseModel';
import { DayInfo, ItemInfo, MonthInfo, WeekInfo } from './TypeDefine';

@Table({
    tableName: 'player',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'index_uuid',
        using: 'HASH',
        fields: ['uuid'],
    }, {
        name: 'index_nickname',
        using: 'HASH',
        fields: ['nickname'],
    }, {
        name: 'index_online',
        using: 'HASH',
        fields: ['online'],
    }]
})
export class PlayerModel extends BaseModel {
    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', primaryKey: true })
    userId: string;

    @Column({ type: DataType.STRING(64), comment: '玩家唯一id', field: 'uuid', allowNull: false })
    uuid: string;

    @Column({ type: DataType.STRING(32), comment: '昵称', field: 'nickname', allowNull: false })
    nickname: string;

    @Column({ type: DataType.BOOLEAN, comment: '在线状态', field: 'online', defaultValue: false })
    online: boolean;

    @Column({ type: DataType.BIGINT({ unsigned: true }), comment: '注册时间', field: 'registerTime', allowNull: false })
    registerTime: number;

    @Column({ type: DataType.BIGINT({ unsigned: true }), comment: '上线时间', field: 'onlineTime', allowNull: true })
    onlineTime: number;

    @Column({ type: DataType.BIGINT({ unsigned: true }), comment: '离线时间', field: 'offlineTime', allowNull: true })
    offlineTime: number;

    @Column({ type: DataType.INTEGER({ unsigned: true }), comment: '累计登录天数', field: 'loginDay', allowNull: false, defaultValue: 0 })
    loginDay: number;

    @Column({
        type: DataType.JSON, comment: '每日数据', field: 'day',
        get() { return this.getJsonData(arguments, DayInfo); }
    })
    private day: DayInfo;

    @Column({
        type: DataType.JSON, comment: '每周数据', field: 'week',
        get() { return this.getJsonData(arguments, WeekInfo); }
    })
    private week: WeekInfo;

    @Column({
        type: DataType.JSON, comment: '每月数据', field: 'month',
        get() { return this.getJsonData(arguments, MonthInfo); }
    })
    private month: MonthInfo;

    @Column({
        type: DataType.JSON, comment: '道具信息', field: 'itemInfo',
        get() { return this.getJsonData(arguments, ItemInfo); }
    })
    itemInfo: ItemInfo;

    @Column({
        type: DataType.JSON, comment: '记录数据', field: 'dictionary',
        get() { return this.getJsonData(arguments); }
    })
    private dictionary: { [key: number]: any };
}