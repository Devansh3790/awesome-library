import { Table, Model, Column, DataType } from "sequelize-typescript";

import {User} from "./user"

@Table({
    tableName: "tweets",
    paranoid: true
})
export class Tweet extends Model<Tweet> {
    @Column({
        primaryKey: true,
        type: DataType.UUID
    })
    public id!: string;

    @Column({
        allowNull: false,
        type: DataType.TEXT,
        validate: {
            min: 2,
            max: 300
        }
    })
    public content!: string;

    @Column({
        type: DataType.UUID,
        references: { model: User, key: 'id' }
    })
    public authorId!: string;
}
