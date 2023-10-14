import express from 'express';
import { UserRoutes } from '../modules/users/users.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ServiceRequestRoutes } from '../modules/serviceRequest/serviceRequest.route';

const router = express.Router();

const modulesRoutes = [
    { path: '/users', route: UserRoutes },
    { path: '/auth', route: AuthRoutes },
    { path: '/service-request', route: ServiceRequestRoutes }
]

modulesRoutes.map((route) => router.use(route.path, route.route))


export default router;