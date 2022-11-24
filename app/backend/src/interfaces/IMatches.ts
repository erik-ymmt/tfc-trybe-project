interface IMatchesService {
  findAll(): Promise<object[] | null>;
}

interface IMatchesModel {
  findAll(): Promise<object[] | null>;
}

export { IMatchesService, IMatchesModel };
