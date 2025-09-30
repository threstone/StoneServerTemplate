/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'friend',
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
        fields: ['userId', 'friendUserId'],
    }]
})
export class FriendModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '自增id', field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', allowNull: false })
    userId: string

    @Column({ type: DataType.STRING(16), comment: '好友id', field: 'friendUserId', allowNull: false })
    friendUserId: string

    @Column({ type: DataType.BIGINT, comment: '添加时间', field: 'time', allowNull: false })
    time: number
}
