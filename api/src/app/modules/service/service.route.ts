import express, { NextFunction, Request, Response } from 'express';
import { CloudinaryHelper } from '../../../helpers/uploadHelper';
import { ServicesController } from './service.controller';
import auth from '../../middlewares/auth';
import { AuthUser } from '../../../enums/user';

const router = express.Router();

router.get('/:id', ServicesController.getSingleService);
router.post('/create-service',
    auth(AuthUser.ADMIN, AuthUser.CUSTOMER, AuthUser.SUPER_ADMIN),
    CloudinaryHelper.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        return ServicesController.CreateService(req, res, next)
    }
);

router.get('/',auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN, AuthUser.CUSTOMER), ServicesController.getAllServices);
router.delete('/:id', auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN, AuthUser.CUSTOMER), ServicesController.deleteService);
router.patch('/:id',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN, AuthUser.CUSTOMER),
    CloudinaryHelper.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        return ServicesController.updateService(req, res, next)
    });

export const ServicesRoutes = router;