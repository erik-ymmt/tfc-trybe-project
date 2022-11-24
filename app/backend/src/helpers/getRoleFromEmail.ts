import User from '../database/models/User';

const findOne = async (email: string) => {
  const user = await User.findOne({ where: { email } });
  return user?.role;
};

export default { findOne };
