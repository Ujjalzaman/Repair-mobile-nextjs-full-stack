import express, { NextFunction, Request, Response } from 'express';
import { AuthController } from './auth.controller';
import { CloudinaryHelper } from '../../../helpers/uploadHelper';

const router = express.Router();

router.post('/login', AuthController.LoginUser);
router.post('/signup', 
    CloudinaryHelper.upload.single('file'),
    (req: Request, res: Response, next: NextFunction)=>{
        return AuthController.SignUpUser(req, res, next)
    }
);

export const AuthRoutes = router;