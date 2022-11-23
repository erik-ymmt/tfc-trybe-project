import * as jwt from 'jsonwebtoken';
import { TUser } from '../interfaces/ILogin';

const secret = process.env.JWT_SECRET;

const generateToken = (user: TUser, role: string) => {
  const jwtConfig = {
    algorithm: 'HS256',
  };

  const payload = { email: user.email, role };

  const token = jwt.sign(
    payload,
    secret as string,
    jwtConfig as jwt.SignOptions,
  );

  return token;
};

export default generateToken;
