import * as express from 'express';
import LeaderboardService from '../services/LeaderboardService';
import LeaderboardController from '../controllers/LeaderboardController';

const router = express.Router();

const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

router.get('/home', (req, res) => leaderboardController.createTable(req, res));
router.get('/away', (req, res) => leaderboardController.createTable(req, res));
router.get('/', (req, res) => leaderboardController.createTable(req, res));

export default router;
