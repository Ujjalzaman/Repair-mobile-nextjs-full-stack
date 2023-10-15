import express from 'express';
import { UserController } from './users.controller';
import auth from '../../middlewares/auth';
import { AuthUser } from '../../../enums/user';

const router = express.Router();

router.get('/admins',auth(AuthUser.ADMIN), UserController.getAdminUsers);
router.get('/:id',auth(AuthUser.ADMIN), UserController.getSingleUser);
router.get('/', UserController.getAllUser);
router.delete('/:id', UserController.deleteUser);
router.patch('/:id', UserController.updateUser);

export const UserRoutes = router;