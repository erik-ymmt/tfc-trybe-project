interface ILeaderboardService {
  matches: TCompleteMatch[];
  table: TTeamTable[];
  createTable(filter: string): Promise<TTeamTable[]>;
  findAllFinishedMatches(): Promise<void>;
  runMatches(filter: string): Promise<void>;
  homeTeamUpdate(match: TCompleteMatch, homeTeamIndex: number): void;
  awayTeamUpdate(match: TCompleteMatch, homeTeamIndex: number): void;
  sortTable(): TTeamTable[];
}

type TTeamTable = {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
};

type TCompleteMatch = {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
  teamHome: {
    id: number;
    teamName: string;
  };
  teamAway: {
    id: number;
    teamName: string;
  };
};

export { ILeaderboardService, TTeamTable, TCompleteMatch };
