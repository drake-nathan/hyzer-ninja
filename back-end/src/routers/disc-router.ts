import { Router } from 'express';
import * as discs from '../controllers/discs-controller';

const router = Router();

// api/discs
router.route('/').get(discs.getDiscs).post(discs.addDisc);
router.get('/:id', discs.getSingleDisc);

export default router;
