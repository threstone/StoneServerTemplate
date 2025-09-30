/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'arena_record',
    createdAt: false,
    updatedAt: false,
    indexes: [{
        name: 'index_userId1',
        using: 'HASH',
        fields: ['userId1'],
    }, {
        name: 'index_userId2',
        using: 'HASH',
        fields: ['userId2'],
    }]
})
export class ArenaRecordModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '自增id', field: 'id', primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING(16), comment: '玩家id1', field: 'userId1', allowNull: false })
    userId1: string

    @Column({ type: DataType.STRING(16), comment: '玩家id2', field: 'userId2', allowNull: false })
    userId2: string

    @Column({
        type: DataType.BLOB('medium'), comment: '简易数据', field: 'simple',
    })
    simple: Uint8Array;

    @Column({
        type: DataType.BLOB('medium'), comment: '详细的战斗数据', field: 'detail',
    })
    detail: Uint8Array;

    @Column({ type: DataType.BIGINT, comment: '添加时间', field: 'time', allowNull: false })
    time: number
}
