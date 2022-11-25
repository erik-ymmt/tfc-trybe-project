import { IMatchesModel, IMatchesService, TMatch, TResult } from '../interfaces/IMatches';

export default class MatchesService implements IMatchesService {
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

  async create(match: TMatch) {
    const result = await this._model.create(match);
    return result;
  }

  async finish(id: string) {
    const result = await this._model.finish(id);
    return result;
  }

  async update(match: TResult) {
    const result = await this._model.update(match);
    return result;
  }
}
