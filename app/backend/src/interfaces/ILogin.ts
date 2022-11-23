type TUser = {
  email: string;
  password: string;
};

interface IService {
  login(user: TUser): void;
}

export { TUser, IService };
