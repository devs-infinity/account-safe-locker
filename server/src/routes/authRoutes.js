import { Router } from 'express';
import {
    signUpController,
    logInController,
    currentUserController,
    logOutController,
} from '../controllers/authController';

const router = Router();

router.get('/currentuser', currentUserController);
router.post('/signup', signUpController);
router.post('/login', logInController);
router.get('/logout', logOutController);

export default router;
