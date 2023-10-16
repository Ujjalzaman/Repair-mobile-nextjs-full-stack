import express from 'express';
import auth from '../../middlewares/auth';
import { AuthUser } from '../../../enums/user';
import { AppointmentController } from './appointment.controller';

const router = express.Router();

router.get('/:id',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    AppointmentController.getSingleAppointment);

router.post('/',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    AppointmentController.createAppointment);

router.get('/',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    AppointmentController.getAllAppointment);


router.delete('/:id',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN),
    AppointmentController.deleteAppointment);

router.patch('/:id',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN),
    AppointmentController.updateAppointment);


export const AppointmentRoutes = router;