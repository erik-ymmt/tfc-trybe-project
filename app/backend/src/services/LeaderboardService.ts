import ILeaderboardService from '../interfaces/ILeaderboard';
import MatchesModel from '../models/MatchesModel';

export default class LeaderboardService implements ILeaderboardService {
  private esLintFooler = 'Brazil Hexa!';

  async findAllMatches() {
    console.log(this.esLintFooler);
    const matchesModel = new MatchesModel();
    const result = await matchesModel.findAll();
    const values = result.map((match) => match.dataValues);
    console.log(values);
    return values;
  }
}
