import Team from '../database/models/Team';

export default class TeamsModel {
  private esLintFooler = 'Brazil Hexa!';

  async findAll() {
    const result = await Team.findAll();
    console.log(this.esLintFooler);
    return result;
  }
}
