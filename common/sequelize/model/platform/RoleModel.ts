/* eslint-disable no-unused-vars */
import {
    Table, Column, Model, DataType,
} from 'sequelize-typescript';

/** 角色模型,每个玩家每个服的角色信息 */
@Table({
    tableName: 'role',
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
    }]
})
export class RoleModel extends Model {
    @Column({ type: DataType.STRING(16), comment: '用户id', field: 'userId', primaryKey: true })
    userId: string

    @Column({ type: DataType.STRING(32), comment: '昵称', field: 'nickname', allowNull: false })
    nickname: string;

    @Column({ type: DataType.STRING(64), comment: '玩家唯一id', field: 'uuid', allowNull: false })
    uuid: string

    @Column({ type: DataType.INTEGER, comment: '服务器id', field: 'serverId', allowNull: true })
    serverId: number
}
