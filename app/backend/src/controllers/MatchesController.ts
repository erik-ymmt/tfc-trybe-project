import { Request, Response } from 'express';
import { IMatchesService } from '../interfaces/IMatches';

export default class MatchesController {
  private _service: IMatchesService;

  constructor(service: IMatchesService) {
    this._service = service;
  }

  async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress) {
      const bool = inProgress === 'true';
      const result = await this._service.findAllFiltered(bool);
      return res.status(200).json(result);
    }
    const result = await this._service.findAll();
    return res.status(200).json(result);
  }

  async create(req: Request, res: Response) {
    const match = req.body;
    const result = await this._service.create(match);
    return res.status(201).json(result);
  }

  async finish(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.finish(id);
    try {
      return res.status(200).json({ message: 'Finished' });
    } catch (err) {
      return res.status(500)
        .json({ message: 'Error, something went wrong' });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const match = req.body;
    match.id = Number(id);
    await this._service.update(match);
    try {
      return res.status(200).json({ message: 'Ok' });
    } catch (err) {
      return res.status(500)
        .json({ message: 'Error, something went wrong' });
    }
  }
}
