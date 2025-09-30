/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'chat_private',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'index_chat',
        using: 'HASH',
        fields: ['userId', 'sendUserId', 'reciverInfo'],
    }]
})
export class PrivateChatModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '自增id', field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', allowNull: false })
    userId: string

    @Column({ type: DataType.STRING(16), comment: '发送者用户id', field: 'sendUserId', allowNull: true })
    sendUserId: string

    @Column({ type: DataType.STRING(16), comment: '接收者信息(目标user id)', field: 'reciverInfo', allowNull: true })
    reciverInfo: string

    @Column({ type: DataType.STRING(128), comment: '内容', field: 'content', allowNull: false })
    content: string

    @Column({ type: DataType.BIGINT, comment: '发送时间', field: 'time', allowNull: false })
    time: number

    @Column({ type: DataType.TINYINT, comment: '客户端用的', field: 'clientType', allowNull: true })
    clientType: number
}