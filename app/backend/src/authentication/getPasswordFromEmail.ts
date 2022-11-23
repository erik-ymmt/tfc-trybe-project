import User from '../database/models/User';

const getPasswordFromEmail = async (email: string) => {
  const user = await User.findOne({ where: { email } });
  return user?.password;
};

export default getPasswordFromEmail;
