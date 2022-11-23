import * as bcrypt from 'bcryptjs';
import getPasswordFromEmail from './getPasswordFromEmail';
import { TUser } from '../interfaces/ILogin';

const validateLogin = async (userInfo: TUser) => {
  const { email, password } = userInfo;
  const passwordDB = await getPasswordFromEmail(email);
  if (!passwordDB) { return 'Incorrect email or password'; }
  const passwordVerification = bcrypt.compareSync(password, passwordDB);
  if (!passwordVerification) { return 'Incorrect email or password'; }
};

export default validateLogin;
