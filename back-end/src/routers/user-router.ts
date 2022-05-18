import { Router } from 'express';
import * as users from '../queries/user-queries';

const router = Router();

// api/users
router.route('/').get(users.getUser).post(users.addUser);

export default router;
