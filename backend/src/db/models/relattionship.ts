import {Model, Column, Table, DataType, ForeignKey} from "sequelize-typescript";

import {User} from "./user";

@Table({
    tableName: 'relationships',
    indexes:[{
        unique: true, fields:['followerId', 'followedId']
    }]
})
export class Relationship extends Model<Relationship> {

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    public followerId!: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    public followedId!: string;
}
