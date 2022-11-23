import { Request, Response } from 'express';
import validateLogin from '../authentication/validateLogin';
import generateToken from '../authentication/generateToken';

export default class LoginController {
  static async login(req: Request, res: Response) {
    const user = req.body;
    try {
      const validation = await validateLogin(user);
      if (typeof validation === 'string') res.status(401).json({ message: validation });
      const token = generateToken(user);
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Internal error' });
    }
  }
}
