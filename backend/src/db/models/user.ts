import {
  Model,
  Column,
  Table,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";

import { Relationship } from "./relattionship";

@Table({ tableName: "users" })
export class User extends Model<User> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
  })
  public id!: string;

  @Column({
    unique: true,
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      max: 120,
    },
  })
  public email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      max: 300,
    },
  })
  public password!: string;

  @BelongsToMany(() => User, () => Relationship, "followedId")
  public followers!: User[];

  @BelongsToMany(() => User, () => Relationship, "followerId")
  public following!: User[];
}
