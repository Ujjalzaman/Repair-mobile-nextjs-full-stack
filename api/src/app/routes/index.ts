import express from 'express';
import { UserRoutes } from '../middlewares/users/users.route';

const router = express.Router();

const modulesRoutes = [
    { path: '/users', route: UserRoutes }
]

modulesRoutes.map((route) => router.use(route.path, route.route))


export default router;