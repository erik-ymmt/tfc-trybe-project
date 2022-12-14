import * as express from 'express';
import MatchesService from '../services/MatchesService';
import MatchesController from '../controllers/MatchesController';
import tokenVerificator from '../authentication/tokenVerificator';

const router = express.Router();

const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);

router.get('/', (req, res) => matchesController.findAll(req, res));
router.post('/', tokenVerificator, (req, res) => matchesController.create(req, res));
router.patch('/:id/finish', tokenVerificator, (req, res) => matchesController.finish(req, res));
router.patch('/:id', tokenVerificator, (req, res) => matchesController.update(req, res));

export default router;
