import * as express from 'express';
import loginRouter from './loginRouter';

const router = express.Router();

router.use('/login', loginRouter);
// router.use('/teams', teamsRouter);

export default router;
