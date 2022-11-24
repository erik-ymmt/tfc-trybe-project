import { IMatchesModel } from '../interfaces/IMatches';
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
}
