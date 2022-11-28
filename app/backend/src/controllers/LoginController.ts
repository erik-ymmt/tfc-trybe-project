import { Request, Response } from 'express';
import validateLogin from '../authentication/validateLogin';
import generateToken from '../authentication/generateToken';
import getRoleFromEmail from '../helpers/getRoleFromEmail';

export default class LoginController {
  static async login(req: Request, res: Response) {
    const user = req.body;
    try {
      const validation = await validateLogin.validate(user);
      if (typeof validation === 'string') return res.status(401).json({ message: validation });
      const role = await getRoleFromEmail.findOne(user.email);
      // para o teste foi necessário await.
      const token = await generateToken.create(user, role as string);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: 'Internal error' });
    }
  }

  static async loginValidate(req: Request, res: Response) {
    const { role } = req.body;
    return res.status(200).json({ role });
  }
}
