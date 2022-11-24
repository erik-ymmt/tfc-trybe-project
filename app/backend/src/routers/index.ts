import * as express from 'express';
import loginRouter from './loginRouter';
import teamsRouter from './teamsRouter';
import matchesRouter from './matchesRouter';

const router = express.Router();

router.use('/login', loginRouter);
router.use('/teams', teamsRouter);
router.use('/matches', matchesRouter);

export default router;
