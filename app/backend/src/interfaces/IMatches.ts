interface IMatchesService {
  findAll(): Promise<object[] | null>;
  findAllFiltered(bool: boolean): Promise<object[] | null>;
  create(match: TMatch): Promise<object | null>;
  update(match: TMatch): Promise<object | null>;
}

type TMatch = {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
};

interface IMatchesModel {
  findAll(): Promise<object[] | null>;
  findAllFiltered(bool: boolean): Promise<object[] | null>;
  create(match: TMatch): Promise<object | null>;
  update(match: TMatch): Promise<object | null>;
}

export { IMatchesService, TMatch, IMatchesModel };
