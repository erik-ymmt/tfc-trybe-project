import * as express from 'express';
import loginRouter from './loginRouter';

const router = express.Router();

router.use('/login', loginRouter);

export default router;
