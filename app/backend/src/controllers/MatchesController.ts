import { Request, Response } from 'express';
import { IMatchesService } from '../interfaces/IMatches';

export default class MatchesController {
  private _service: IMatchesService;

  constructor(service: IMatchesService) {
    this._service = service;
  }

  async findAll(_req: Request, res: Response) {
    const result = await this._service.findAll();
    res.status(200).json(result);
  }
}
