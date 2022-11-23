import { Request, Response } from 'express';
import validateLogin from '../authentication/validateLogin';
import generateToken from '../authentication/generateToken';
import getRoleFromEmail from '../helpers/getRoleFromEmail';

export default class LoginController {
  static async login(req: Request, res: Response) {
    const user = req.body;
    try {
      const validation = await validateLogin(user);
      if (typeof validation === 'string') return res.status(401).json({ message: validation });
      const role = await getRoleFromEmail(user.email);
      const token = generateToken(user, role as string);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: 'Internal error' });
    }
  }

  static async loginValidate(req: Request, res: Response) {
    try {
      const { role } = req.body;
      return res.status(200).json({ role });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal error' });
    }
  }
}
