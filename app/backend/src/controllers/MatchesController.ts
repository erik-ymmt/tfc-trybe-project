import { Request, Response } from 'express';
import { IMatchesService } from '../interfaces/IMatches';
import TeamsModel from '../models/TeamsModel';
import TeamsService from '../services/TeamsService';

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

  static async findAllTeamIds() {
    const teamsModel = new TeamsModel();
    const teamsService = new TeamsService(teamsModel);
    const result = await teamsService.findAll();
    const teamIds = result?.map((team) => team.id);
    return teamIds;
  }

  async create(req: Request, res: Response) {
    const match = req.body;
    const { homeTeam, awayTeam } = match;
    const teamIds = await MatchesController.findAllTeamIds() || [];
    if (!teamIds.includes(homeTeam) || !teamIds.includes(awayTeam)) {
      return res.status(404).json({
        message: 'There is no team with such id!',
      });
    }
    if (homeTeam === awayTeam) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams',
      });
    }
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
