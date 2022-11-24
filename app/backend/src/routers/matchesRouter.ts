import * as express from 'express';
import MatchesModel from '../models/MatchesModel';
import MatchesService from '../services/MatchesService';
import MatchesController from '../controllers/MatchesController';

const router = express.Router();

const matchesModel = new MatchesModel();
const matchesService = new MatchesService(matchesModel);
const matchesController = new MatchesController(matchesService);

router.get('/', (req, res) => matchesController.findAll(req, res));
// router.get('/:id', (req, res) => matchesController.findOne(req, res));

export default router;
