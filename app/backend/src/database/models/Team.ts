import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class Team extends Model {
  declare id: number;
  declare teamName: string;
}

Team.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING(50),
    allowNull: false,
  },
}, {
  modelName: 'teams',
  sequelize: db,
  timestamps: false,
  underscored: true,
});

export default Team;
