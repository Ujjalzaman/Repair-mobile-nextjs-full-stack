import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/login', AuthController.LoginUser);
router.post('/signup', AuthController.SignUpUser);

export const AuthRoutes = router;