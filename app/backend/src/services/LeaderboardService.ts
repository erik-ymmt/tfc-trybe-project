import TeamsModel from '../models/TeamsModel';
import { ILeaderboardService, TCompleteMatch, TTeamTable } from '../interfaces/ILeaderboard';
import MatchesModel from '../models/MatchesModel';

export default class LeaderboardService implements ILeaderboardService {
  matches: TCompleteMatch[] = [];
  table: TTeamTable[] = [];

  async createTable() {
    const teamsModel = new TeamsModel();
    const allTeams = await teamsModel.findAll();
    this.table = allTeams.map((team) => ({
      name: team.teamName,
      totalPoints: 0,
      totalGames: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 0,
      goalsOwn: 0,
      goalsBalance: 0,
      efficiency: 0,
    }));
    await this.findAllFinishedMatches();
    await this.runMatches();
    this.sortTable();
    return this.table;
  }

  async findAllFinishedMatches() {
    const matchesModel = new MatchesModel();
    const result = await matchesModel.findAll();
    const allMatches = result.map((match) => match.dataValues);
    const finishedMatches = allMatches.filter((match) => match.inProgress === false);
    this.matches = finishedMatches;
  }

  async runMatches() {
    this.matches.forEach((match) => {
      const homeTeamIndex: number | undefined = this.table
        .findIndex((team) => team.name === match.teamHome.teamName);
      // const awayTeamIndex: number | undefined = this.table
      //   .findIndex((team) => team.name === match.teamAway.teamName);
      if (homeTeamIndex > -1) {
        this.homeTeamUpdate(match, homeTeamIndex);
      }
      // if (awayTeamIndex) {
      //   this.awayTeamUpdate(match, awayTeamIndex);
      // }
    });
  }

  homeTeamUpdate(match: TCompleteMatch, homeTeamIndex: number) {
    const homeTeam = this.table[homeTeamIndex];
    homeTeam.totalGames += 1;
    homeTeam.goalsFavor += match.homeTeamGoals;
    homeTeam.goalsOwn += match.awayTeamGoals;
    homeTeam.goalsBalance = homeTeam.goalsFavor - homeTeam.goalsOwn;
    if (match.homeTeamGoals > match.awayTeamGoals) {
      homeTeam.totalVictories += 1;
      homeTeam.totalPoints += 3;
    } else if (match.homeTeamGoals === match.awayTeamGoals) {
      homeTeam.totalDraws += 1;
      homeTeam.totalPoints += 1;
    } else {
      homeTeam.totalLosses += 1;
    }
    const efficiency = (homeTeam.totalPoints / (homeTeam.totalGames * 3)) * 100;
    homeTeam.efficiency = Math.round(efficiency * 100) / 100;
  }

  // awayTeamUpdate(match: TCompleteMatch, awayTeam: number) {
  //   const awayTeam = this.table[awayTeamIndex];
  //   homeTeam.totalGames += 1;
  //   homeTeam.goalsFavor += match.homeTeamGoals;
  //   homeTeam.goalsOwn += match.awayTeamGoals;
  //   homeTeam.goalsBalance = homeTeam.goalsFavor - homeTeam.goalsOwn;
  //   match.homeTeamGoals > match.awayTeamGoals
  //     ? homeTeam.totalVictories += 1
  //     : homeTeam.totalLosses += 1
  // }

  sortTable() {
    const sortGoalsOwn = this.table.sort((a, b) => b.goalsOwn - a.goalsOwn);
    const sortGoalsFavor = sortGoalsOwn.sort((a, b) => b.goalsFavor - a.goalsFavor);
    const sortGoalsBalance = sortGoalsFavor.sort((a, b) => b.goalsBalance - a.goalsBalance);
    const sortVictories = sortGoalsBalance.sort((a, b) => b.totalVictories - a.totalVictories);
    const sortPoints = sortVictories.sort((a, b) => b.totalPoints - a.totalPoints);
    this.table = sortPoints;
  }
}
