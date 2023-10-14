import express from 'express';
import { UserController } from './users.controller';

const router = express.Router();

router.get('/:id', UserController.getSingleUser);
router.get('/', UserController.getAllUser);
router.delete('/:id', UserController.deleteUser);
router.patch('/:id', UserController.updateUser);

export const UserRoutes = router;