import * as express from 'express';
import loginRouter from './loginRouter';

const router = express.Router();

router.use('/login', loginRouter);
router.get('/test', (_req, res) => res.json({ test: 'ok!' }));

export default router;
