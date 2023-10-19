import express from 'express';
import { UserController } from './users.controller';
import auth from '../../middlewares/auth';
import { AuthUser } from '../../../enums/user';

const router = express.Router();

router.get('/admins',auth(AuthUser.ADMIN), UserController.getAdminUsers);
router.get('/:id',auth(AuthUser.ADMIN, AuthUser.CUSTOMER), UserController.getSingleUser);
router.get('/', UserController.getAllUser);
router.delete('/:id',auth(AuthUser.ADMIN), UserController.deleteUser);
router.patch('/:id',auth(AuthUser.ADMIN, AuthUser.CUSTOMER), UserController.updateUser);

export const UserRoutes = router;