import express from 'express';
import { UserController } from './users.controller';

const router = express.Router();

router.post('/', UserController.createCustomer);

export const UserRoutes = router;