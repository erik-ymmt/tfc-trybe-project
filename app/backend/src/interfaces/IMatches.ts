interface IMatchesService {
  findAll(): Promise<object[] | null>;
  findAllFiltered(bool: boolean): Promise<object[] | null>;
}

interface IMatchesModel {
  findAll(): Promise<object[] | null>;
  findAllFiltered(bool: boolean): Promise<object[] | null>;
}

export { IMatchesService, IMatchesModel };
