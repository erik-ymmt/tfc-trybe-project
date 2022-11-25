const allMatchesMock = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      id: 16,
      teamName: "São Paulo",
    },
    teamAway: {
      id: 8,
      teamName: "Grêmio",
    },
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      id: 9,
      teamName: "Internacional",
    },
    teamAway: {
      id: 14,
      teamName: "Santos",
    },
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      id: 4,
      teamName: "Corinthians",
    },
    teamAway: {
      id: 11,
      teamName: "Napoli-SC",
    },
  },
  {
    id: 4,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      id: 3,
      teamName: "Botafogo",
    },
  },
];

const inProgressMathces = [
  {
    id: 41,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 9,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      id: 16,
      teamName: "São Paulo",
    },
    teamAway: {
      id: 9,
      teamName: "Internacional",
    },
  },
  {
    id: 42,
    homeTeam: 6,
    homeTeamGoals: 1,
    awayTeam: 1,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      id: 6,
      teamName: "Ferroviária",
    },
    teamAway: {
      id: 1,
      teamName: "Avaí/Kindermann",
    },
  },
];

abstract class AllMatchesMock {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
  declare teamHome: object;
  declare teamAway: object;
}

export { allMatchesMock, inProgressMathces, AllMatchesMock };
