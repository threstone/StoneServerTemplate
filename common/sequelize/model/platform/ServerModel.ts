/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'server',
    createdAt: false,
    updatedAt: false
})
export class ServerModel extends Model {
    @Column({ type: DataType.INTEGER, comment: '服务器id', field: 'id', primaryKey: true })
    id: number

    @Column({ type: DataType.BIGINT, comment: '开服时间', field: 'startTime', allowNull: false })
    startTime: number

    @Column({ type: DataType.TINYINT, comment: '服务器状态:0维护,1开启', field: 'status', allowNull: false, defaultValue: 1 })
    status: number

    @Column({ type: DataType.TINYINT, comment: '服务器标签:1:火爆 2新服', field: 'tag', allowNull: false, defaultValue: 1 })
    tag: number
}
