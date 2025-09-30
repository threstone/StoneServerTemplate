/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'friend_req',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'index_userId',
        using: 'HASH',
        fields: ['userId'],
    },
    {
        name: 'unique',
        unique: true,
        using: 'HASH',
        fields: ['userId', 'targetUserId'],
    }]
})
export class FriendReqModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '自增id', field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', allowNull: false })
    userId: string

    @Column({ type: DataType.STRING(16), comment: '目标', field: 'targetUserId', allowNull: false })
    targetUserId: string

    @Column({ type: DataType.BIGINT, comment: '请求时间时间', field: 'time', allowNull: false })
    time: number
}
