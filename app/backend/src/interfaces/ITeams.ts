import Team from '../database/models/Team';

interface ITeamsService {
  findAll(): Promise<object[] | null>;
  findOne(id: string): Promise<Team | null>;
}

interface ITeamsModel {
  findAll(): Promise<object[] | null>;
  findOne(id: string): Promise<Team | null>;
}

export { ITeamsService, ITeamsModel };
