import express from 'express';
import auth from '../../middlewares/auth';
import { AuthUser } from '../../../enums/user';
import { OrderController } from './order.controller';

const router = express.Router();

router.get('/:id',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    OrderController.getSingleOrder);

router.post('/',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    OrderController.generateOrder);

router.get('/',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    OrderController.getAllOder);


router.delete('/:id',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN),
    OrderController.deleteOrder);

router.patch('/:id',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN),
    OrderController.updateOrder);


export const OrderRoutes = router;