import express from 'express';
import auth from '../../middlewares/auth';
import { AuthUser } from '../../../enums/user';
import { ServiceRequestController } from './serviceRequest.controller';

const router = express.Router();

router.get('/:id',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    ServiceRequestController.getSingleServiceRequest);

router.post('/',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    ServiceRequestController.createServiceRequest);

router.get('/',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    ServiceRequestController.getAllServiceRequest);


router.delete('/:id',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN),
    ServiceRequestController.deleteServiceRequest);

router.patch('/:id',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN),
    ServiceRequestController.updateServiceRequest);


export const ServiceRequestRoutes = router;