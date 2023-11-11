import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './users.controller';
import auth from '../../middlewares/auth';
import { AuthUser } from '../../../enums/user';
import { CloudinaryHelper } from '../../../helpers/uploadHelper';

const router = express.Router();

router.get('/admins', auth(AuthUser.ADMIN), UserController.getAdminUsers);
router.get('/:id', auth(AuthUser.ADMIN, AuthUser.CUSTOMER), UserController.getSingleUser);
router.get('/', UserController.getAllUser);
router.delete('/:id', auth(AuthUser.ADMIN), UserController.deleteUser);
router.patch('/:id',
    CloudinaryHelper.upload.single('file'),
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER),
    (req: Request, res: Response, next: NextFunction) => {
        return UserController.updateUser(req, res, next)
    }

);

export const UserRoutes = router;