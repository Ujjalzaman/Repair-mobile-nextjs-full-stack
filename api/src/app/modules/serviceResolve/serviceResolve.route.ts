import express from 'express';
import auth from '../../middlewares/auth';
import { AuthUser } from '../../../enums/user';
import { ServiceResolveController } from './serviceResolve.controller';

const router = express.Router();

router.get('/:id',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    ServiceResolveController.getSingleServiceResolv);

router.post('/',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN),
    ServiceResolveController.createServiceResolv);

router.get('/',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    ServiceResolveController.getAllServiceResolv);

router.get('/:id/track',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    ServiceResolveController.trackingServiceResolve)


router.delete('/:id',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN),
    ServiceResolveController.deleteServiceResolv);

router.patch('/:id',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN),
    ServiceResolveController.updateServiceResolv);


export const ServiceResolveRoutes = router;