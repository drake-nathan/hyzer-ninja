import { Router } from 'express';
import { getDiscs } from '../controllers/DiscsController';

const router = Router();

router.get('/', getDiscs);

export default router;
