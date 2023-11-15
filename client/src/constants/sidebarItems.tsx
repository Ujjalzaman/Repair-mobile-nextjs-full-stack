import type { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
    const defaultSidebarProps: MenuProps['items'] = [
        {
            label: <Link href={`/dashboard`}>Dashboard</Link>,
            key: `dashboard`
        },
    ]

    const AdminSidebarItems: MenuProps['items'] = [
        ...defaultSidebarProps,
        {
            label: <Link href={`/admin/`}>Manage Admin</Link>,
            key: `/admin/manage`
        },
        {
            label: <Link href={`/admin/appointments`}>Appointmets</Link>,
            key: `/admin/admin/appointments`
        },
        {
            label: <Link href={`/admin/customers`}>Customers</Link>,
            key: `/admin/customers`
        },
        {
            label: <Link href={`/admin/order`}>Order</Link>,
            key: `/admin/order`,
        },
        {
            label: <Link href={`/admin/service-request`}>Services</Link>,
            key: `/admin/service-request`,
        },
        {
            label: <Link href={`/admin/blog`}>Blog</Link>,
            key: `/admin/blog`
        },
        {
            label: <Link href={`/admin/testimonials`}>Reviews</Link>,
            key: `/admin/testimonials`
        },
    ]

    const customerItems: MenuProps['items'] = [
        ...defaultSidebarProps,
        {
            label: <Link href={`/${role}/service-request`}>Services</Link>,
            key: `/${role}/service-request`,
        },
        {
            label: <Link href={`/${role}/order`}>My Order</Link>,
            key: `/${role}/order`,
        },
        {
            label: <Link href={`/${role}/appointments`}>Appointment</Link>,
            key: `/${role}/appointment`,
        },
        {
            label: <Link href={`/${role}/testimonials`}>Reviews</Link>,
            key: `/${role}/testimonials`
        },
    ];

    if (role === USER_ROLE.ADMIN || role === USER_ROLE.SUPER_ADMIN) return AdminSidebarItems;
    if (role === USER_ROLE.CUSTOMER) return customerItems;
    else {
        return defaultSidebarProps
    }
}