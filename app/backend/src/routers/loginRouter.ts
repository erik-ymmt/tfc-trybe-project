import * as express from 'express';
import validateUserInfo from '../middlewares/validateUserInfo';
import LoginController from '../controllers/LoginController';

const router = express.Router();

router.post('/', validateUserInfo, (req, res) => LoginController.login(req, res));
// router.post('/', (req, res) => res.json({ ok: 'test' }));

export default router;
