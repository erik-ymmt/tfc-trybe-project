import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class User extends Model {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING(255),
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING(255),
    allowNull: false,
  },
  password: {
    type: STRING(255),
    allowNull: false,
  },
}, {
  modelName: 'users',
  sequelize: db,
  timestamps: false,
  underscored: true,
});

export default User;
