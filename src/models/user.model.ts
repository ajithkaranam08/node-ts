import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  BeforeCreate,
} from 'sequelize-typescript';
import { InferCreationAttributes, InferAttributes, CreationOptional } from 'sequelize';
import argon2 from 'argon2';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: CreationOptional<number>;

  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.STRING)
  name!: string;

  @BeforeCreate
  static async hashPassword(instance: User) {
    instance.password = await argon2.hash(instance.password);
  }
}
