/* eslint-disable no-unused-vars */
import {
    Table, Column, DataType,
} from 'sequelize-typescript';
import { BaseModel } from '../BaseModel';

@Table({
    tableName: 'email',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'index_receiverUserId',
        using: 'HASH',
        fields: ['receiverUserId'],
    }]
})
export class EmailModel extends BaseModel {
    @Column({ type: DataType.INTEGER, comment: '自增id', field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(16), comment: '接收者id', field: 'receiverUserId', allowNull: false })
    receiverUserId: string

    @Column({ type: DataType.INTEGER, comment: '邮件配置id', field: 'configId', allowNull: false })
    configId: number

    @Column({ type: DataType.STRING(128), comment: '邮件参数,用来替换占位符,使用"|"分割', field: 'params', allowNull: true })
    params: string;

    @Column({
        type: DataType.STRING(2048), comment: '奖励道具信息', field: 'items',
        get() { return this.getJsonData(arguments); }
    })
    items: IItem[];

    @Column({ type: DataType.BOOLEAN, comment: '是否读取', field: 'isRead', allowNull: false })
    isRead: boolean

    @Column({ type: DataType.BIGINT, comment: '发送时间', field: 'sendTime', allowNull: false })
    sendTime: number

    @Column({ type: DataType.BIGINT, comment: '过期时间戳 0为永久邮件', field: 'expireTime', allowNull: false })
    expireTime: number
}

interface IItem {

    /** Item itemId */
    itemId?: (number | null);

    /** Item count */
    count?: (number | null);

    /** Item isNew */
    isNew?: (boolean | null);

    /** Item expireTime */
    expireTime?: (number | null);
}