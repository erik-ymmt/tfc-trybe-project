import User from '../database/models/User';

const getRoleFromEmail = async (email: string) => {
  const user = await User.findOne({ where: { email } });
  return user?.role;
};

export default getRoleFromEmail;
