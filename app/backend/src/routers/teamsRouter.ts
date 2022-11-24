import * as express from 'express';
import TeamsModel from '../models/TeamsModel';
import TeamsService from '../services/TeamsService';
import TeamsController from '../controllers/TeamsController';

const router = express.Router();

const teamsModel = new TeamsModel();
const teamsService = new TeamsService(teamsModel);
const teamsController = new TeamsController(teamsService);

router.get('/', (req, res) => teamsController.findAll(req, res));
router.get('/:id', (req, res) => teamsController.findOne(req, res));

export default router;
