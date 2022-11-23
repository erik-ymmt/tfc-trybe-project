import User from '../database/models/User';

const getRegisteredEmails = async () => {
  const result = await User.findAll({
    attributes: ['email', 'password', 'role'],
  });
  const emails = result.map((element) => element.dataValues.email);

  return { emails };
};

export default getRegisteredEmails;
