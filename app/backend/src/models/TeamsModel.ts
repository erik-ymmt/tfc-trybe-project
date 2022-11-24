import { ITeamsModel } from '../interfaces/ITeams';
import Team from '../database/models/Team';

export default class TeamsModel implements ITeamsModel {
  private esLintFooler = 'Brazil Hexa!';

  async findAll() {
    const result = await Team.findAll();
    console.log(this.esLintFooler);
    return result;
  }

  async findOne(id: string) {
    const result = await Team.findOne({ where: { id } });
    console.log(this.esLintFooler);
    return result;
  }
}
