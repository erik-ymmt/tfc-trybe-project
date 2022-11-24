import { ITeamsModel } from '../interfaces/ITeams';

export default class TeamsService {
  private _model: ITeamsModel;

  constructor(model: ITeamsModel) {
    this._model = model;
  }

  async findAll() {
    const result = await this._model.findAll();
    return result;
  }
}
