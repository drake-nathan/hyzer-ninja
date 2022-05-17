import { Router } from 'express';
import * as discs from '../queries/disc-queries';

const router = Router();

// api/discs
router.route('/').get(discs.getDiscs).post(discs.addDisc);
router
  .route('/:id')
  .get(discs.getSingleDisc)
  .delete(discs.deleteDisc)
  .put(discs.updateDisc);

export default router;
