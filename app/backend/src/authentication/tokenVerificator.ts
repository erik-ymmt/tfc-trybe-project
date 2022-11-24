import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import getRegisteredEmails from '../helpers/getRegisteredEmails';

const secret = process.env.JWT_SECRET || 'secretJWT';

const tokenVerificator = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = await jwt.verify(token, secret as string) as jwt.JwtPayload;
    const { emails } = await getRegisteredEmails.findAll();

    req.body.role = decoded.role;

    if (!emails.includes(decoded.email)) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }

  next();
};

export default tokenVerificator;
