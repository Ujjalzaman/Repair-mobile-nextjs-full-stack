import express from 'express';
import { PaymentController } from './payment.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';

const router = express.Router();

router.post('/',auth(UserRole.admin, UserRole.customer),PaymentController.createPayment);
router.get('/:sessionId',PaymentController.getSuccessPayment);

export const PaymentRoutes = router;