import express from 'express';
import { UserRoutes } from '../modules/users/users.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ServiceRequestRoutes } from '../modules/serviceRequest/serviceRequest.route';
import { AppointmentRoutes } from '../modules/appointment/appointment.route';
import { ServiceResolveRoutes } from '../modules/serviceResolve/serviceResolve.route';
import { ReviewRoutes } from '../modules/reviews/reviews.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { ServicesRoutes } from '../modules/service/service.route';
import { OrderRoutes } from '../modules/orders/order.route';

const router = express.Router();

const modulesRoutes = [
    { path: '/users', route: UserRoutes },
    { path: '/auth', route: AuthRoutes },
    { path: '/service-request', route: ServiceRequestRoutes },
    { path: '/appointment', route: AppointmentRoutes },
    { path: '/service-resolve', route: ServiceResolveRoutes },
    { path: '/reviews', route: ReviewRoutes },
    { path: '/blog', route: BlogRoutes },
    { path: '/services', route: ServicesRoutes },
    { path: '/order', route: OrderRoutes }
]

modulesRoutes.map((route) => router.use(route.path, route.route))

export default router;