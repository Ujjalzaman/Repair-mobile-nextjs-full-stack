import express from 'express';
import { UserRoutes } from '../modules/users/users.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ServiceRequestRoutes } from '../modules/serviceRequest/serviceRequest.route';
import { AppointmentRoutes } from '../modules/appointment/appointment.route';
import { ServiceResolveRoutes } from '../modules/serviceResolve/serviceResolve.route';
import { ReviewRoutes } from '../modules/reviews/reviews.route';

const router = express.Router();

const modulesRoutes = [
    { path: '/users', route: UserRoutes },
    { path: '/auth', route: AuthRoutes },
    { path: '/service-request', route: ServiceRequestRoutes },
    { path: '/appointment', route: AppointmentRoutes },
    { path: '/service-resolve', route: ServiceResolveRoutes },
    { path: '/reviews', route: ReviewRoutes }
]

modulesRoutes.map((route) => router.use(route.path, route.route))


export default router;