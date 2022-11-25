import Team from '../database/models/Team';

interface ITeamsService {
  findAll(): Promise<Team[] | null>;
  findOne(id: string): Promise<Team | null>;
}

interface ITeamsModel {
  findAll(): Promise<Team[] | null>;
  findOne(id: string): Promise<Team | null>;
}

export { ITeamsService, ITeamsModel };
