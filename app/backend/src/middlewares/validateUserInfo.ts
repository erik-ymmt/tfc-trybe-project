import { NextFunction, Request, Response } from 'express';
import { TUser } from '../interfaces/ILogin';

const validateUserInfo = (req: Request, res: Response, next: NextFunction) => {
  const user:TUser = req.body;
  if (!user.email || !user.password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  return next();
};

export default validateUserInfo;
