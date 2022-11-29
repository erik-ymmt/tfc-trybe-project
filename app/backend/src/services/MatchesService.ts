import Match from '../database/models/Match';
import { IMatchesService, TMatch, TResult } from '../interfaces/IMatches';

export default class MatchesService implements IMatchesService {
  private _model;

  constructor() {
    this._model = Match;
  }

  async findAll() {
    const result = await this._model.findAll({ include: { all: true } });
    return result;
  }

  async findAllFiltered(bool: boolean) {
    const result = await this._model.findAll({
      where: { inProgress: bool },
      include: { all: true },
    });
    return result;
  }

  async create(match: TMatch) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;
    const affectedRows = await Match
      .create({ homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress: 0 });
    if (affectedRows) {
      const result = await this._model.findOne({
        where: { homeTeam, awayTeam },
      });
      return result;
    }
    throw new Error('Failed to create match');
  }

  async finish(id: string) {
    const [affectedCount] = await this._model.update({ inProgress: 0 }, {
      where: { id },
    });
    return affectedCount;
  }

  async update(match: TResult) {
    const { homeTeamGoals, awayTeamGoals } = match;
    const [affectedCount] = await this._model.update({ homeTeamGoals, awayTeamGoals }, {
      where: { id: match.id },
    });
    return affectedCount;
  }
}
