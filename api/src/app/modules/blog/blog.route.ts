import express, { NextFunction, Request, Response } from 'express';
import auth from '../../middlewares/auth';
import { AuthUser } from '../../../enums/user';
import { BlogController } from './blog.controller';
import { CloudinaryHelper } from '../../../helpers/uploadHelper';

const router = express.Router();
router.get('/:id', BlogController.getBlog);
router.post('/',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN),
    CloudinaryHelper.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        return BlogController.createBlog(req, res, next)
    });
router.get('/', BlogController.getAllBlogs);
router.delete('/:id', auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN), BlogController.deleteBlog);
router.patch('/:id',
    auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN),
    CloudinaryHelper.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        return BlogController.updateBlog(req, res, next)
    });

export const BlogRoutes = router;