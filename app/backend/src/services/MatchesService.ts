import { IMatchesModel } from '../interfaces/IMatches';

export default class MatchesService {
  private _model: IMatchesModel;

  constructor(model: IMatchesModel) {
    this._model = model;
  }

  async findAll() {
    const result = await this._model.findAll();
    return result;
  }

  async findAllFiltered(bool: boolean) {
    const result = await this._model.findAllFiltered(bool);
    return result;
  }
}
