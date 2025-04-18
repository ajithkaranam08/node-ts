import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';
import env from '../configs/env';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: env.DB_HOST,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  models: [User],
  logging: false,
});
