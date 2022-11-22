import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './Team';

class Match extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  modelName: 'Matches',
  sequelize: db,
  timestamps: false,
  underscored: true,
});

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'team' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'team' });

Team.hasMany(Match, { foreignKey: 'id', as: 'matches' });
Team.hasMany(Match, { foreignKey: 'id', as: 'matches' });

export default Match;
