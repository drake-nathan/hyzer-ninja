import { Router } from 'express';
import { getDiscs } from '../controllers/discs-controller';

const router = Router();

router.get('/', getDiscs);

export default router;
