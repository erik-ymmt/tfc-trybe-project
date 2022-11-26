import { Request, Response } from 'express';
import { ILeaderboardService } from '../interfaces/ILeaderboard';

export default class LeaderboardController {
  private _service: ILeaderboardService;

  constructor(service: ILeaderboardService) {
    this._service = service;
  }

  async createTable(req: Request, res: Response) {
    const result = await this._service.createTable();
    return res.status(200).json(result);
  }
}
