import Match from '../database/models/Match';

interface ILeaderboardService {
  findAllMatches(): Promise<Match[] | null>;
}

export default ILeaderboardService;
