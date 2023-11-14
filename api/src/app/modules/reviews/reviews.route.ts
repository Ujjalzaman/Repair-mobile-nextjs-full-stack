import express from 'express';
import auth from '../../middlewares/auth';
import { AuthUser } from '../../../enums/user';
import { ReivewController } from './reviews.controller';

const router = express.Router();

router.get('/my-review', auth(AuthUser.CUSTOMER, AuthUser.ADMIN, AuthUser.SUPER_ADMIN), ReivewController.getMyReviews);
router.get('/:id',ReivewController.getReview);

router.post('/',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN, AuthUser.CUSTOMER),
    ReivewController.createReview);

router.get('/', ReivewController.getAllReviews);

router.delete('/:id', auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN, AuthUser.CUSTOMER), ReivewController.deleteReview);

router.patch('/:id', auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN, AuthUser.CUSTOMER), ReivewController.updateReview);


export const ReviewRoutes = router;