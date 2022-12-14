import { Request, Response } from 'express';
import ITeamsService from '../interfaces/ITeams';

export default class TeamsController {
  private _service: ITeamsService;

  constructor(service: ITeamsService) {
    this._service = service;
  }

  async findAll(_req: Request, res: Response) {
    const result = await this._service.findAll();
    res.status(200).json(result);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.findOne(id);
    res.status(200).json(result);
  }
}
