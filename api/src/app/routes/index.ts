import express from 'express';
import { UserRoutes } from '../modules/users/users.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ReviewRoutes } from '../modules/reviews/reviews.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { ServicesRoutes } from '../modules/service/service.route';
import { OrderRoutes } from '../modules/orders/order.route';
import { PaymentRoutes } from '../modules/payment/payment.route';

const router = express.Router();

const modulesRoutes = [
    { path: '/users', route: UserRoutes },
    { path: '/auth', route: AuthRoutes },
    { path: '/reviews', route: ReviewRoutes },
    { path: '/blog', route: BlogRoutes },
    { path: '/services', route: ServicesRoutes },
    { path: '/order', route: OrderRoutes },
    { path: '/payment', route: PaymentRoutes },
]

modulesRoutes.map((route) => router.use(route.path, route.route))

export default router;