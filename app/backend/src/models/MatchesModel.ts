import { IMatchesModel, TMatch } from '../interfaces/IMatches';
import Match from '../database/models/Match';

export default class MatchesModel implements IMatchesModel {
  private esLintFooler = 'Brazil Hexa!';

  async findAll() {
    const result = await Match.findAll({ include: { all: true } });
    console.log(this.esLintFooler);
    return result;
  }

  async findAllFiltered(bool: boolean) {
    const result = await Match.findAll({
      where: { inProgress: bool },
      include: { all: true },
    });
    console.log(this.esLintFooler);
    return result;
  }

  async create(match: TMatch) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;
    const affectedRows = await Match
      .create({ homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress: 0 });
    console.log(this.esLintFooler);
    if (affectedRows) {
      const result = await Match.findOne({
        where: { homeTeam, awayTeam },
      });
      return result;
    }
    throw new Error('Failed to create match');
  }

  async finish(id: string) {
    const [affectedCount] = await Match.update({ inProgress: 0 }, {
      where: { id },
    });
    console.log(this.esLintFooler);
    return affectedCount;
  }

  async update(match: TMatch) {
    const { homeTeamGoals, awayTeamGoals } = match;
    const [affectedCount] = await Match.update({ homeTeamGoals, awayTeamGoals }, {
      where: { id: match.id },
    });
    console.log(this.esLintFooler);
    return affectedCount;
  }
}
