import * as express from 'express';
import validateUserInfo from '../middlewares/validateUserInfo';
import LoginController from '../controllers/LoginController';
import tokenVerificator from '../authentication/tokenVerificator';

const router = express.Router();

router.post('/', validateUserInfo, (req, res) => LoginController.login(req, res));
router.get('/validate', tokenVerificator, (req, res) => LoginController.loginValidate(req, res));

export default router;
