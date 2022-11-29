import Team from '../database/models/Team';

export default class TeamsService {
  private _model;

  constructor() {
    this._model = Team;
  }

  async findAll() {
    const result = await this._model.findAll();
    return result;
  }

  async findOne(id: string) {
    const result = await this._model.findOne({ where: { id } });
    return result;
  }
}
