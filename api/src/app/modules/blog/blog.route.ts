import express from 'express';
import auth from '../../middlewares/auth';
import { AuthUser } from '../../../enums/user';
import { BlogController } from './blog.controller';

const router = express.Router();
router.get('/:id',BlogController.getBlog);
router.post('/',auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN, AuthUser.CUSTOMER), BlogController.createBlog);
router.get('/', BlogController.getAllBlogs);
router.delete('/:id', auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN, AuthUser.CUSTOMER), BlogController.deleteBlog);
router.patch('/:id', auth(AuthUser.ADMIN, AuthUser.SUPER_ADMIN, AuthUser.CUSTOMER), BlogController.updateBlog);

export const BlogRoutes = router;