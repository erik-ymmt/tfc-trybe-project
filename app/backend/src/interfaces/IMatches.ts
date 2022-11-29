import Match from '../database/models/Match';

type TResult = {
  id: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
};

type TMatch = TResult & {
  homeTeam: number;
  awayTeam: number;
};

interface IMatchesService {
  findAll(): Promise<Match[] | null>;
  findAllFiltered(bool: boolean): Promise<object[] | null>;
  create(match: TMatch): Promise<object | null>;
  finish(id: string): Promise<number>;
  update(match: TResult): Promise<number>;
}

export { TMatch, TResult, IMatchesService };
