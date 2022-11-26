import * as express from 'express';
import LeaderboardService from '../services/LeaderboardService';
import LeaderboardController from '../controllers/LeaderboardController';

const router = express.Router();

const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

router.get('/home', (req, res) => leaderboardController.createTable(req, res));
// router.get('/away', tokenVerificator, (req, res) => leaderboardController.find(req, res));
// router.get('/', tokenVerificator, (req, res) => leaderboardController.find(req, res));

export default router;
