import { Router } from 'express';
import * as discs from '../controllers/discs-controller';

const router = Router();

// api/discs
router.get('/', discs.getDiscs);
router.get('/:id', discs.getSingleDisc);

export default router;
