import User from '../database/models/User';

const findAll = async () => {
  const result = await User.findAll({
    attributes: ['email', 'password', 'role'],
  });
  const emails = result.map((element) => element.dataValues.email);

  return { emails };
};

export default { findAll };
