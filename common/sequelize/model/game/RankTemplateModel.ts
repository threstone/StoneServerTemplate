/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

@Table({
    tableName: 'rank:',
    createdAt: false,
    updatedAt: false,
    // indexes: [{                  // 排序不频繁，不加索引
    //     name: 'index_score',
    //     using: 'HASH',
    //     fields: ['score'],
    // }]
})
export class RankTemplateModel extends Model {
    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', primaryKey: true })
    userId: string

    @Column({ type: DataType.BIGINT, comment: '积分', field: 'score', allowNull: false })
    score: number
}
