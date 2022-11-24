interface ITeamsService {
  findAll(): Promise<object[]>;
}

interface ITeamsModel {
  findAll(): Promise<object[]>;
}

export { ITeamsService, ITeamsModel };
