import { Router } from 'express';
import DiscsController from '../controllers/DiscsController';

const router = Router();
const discsController = new DiscsController();

router.route('/discs').get();
