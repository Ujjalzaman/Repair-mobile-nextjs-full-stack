import type { MenuProps } from "antd";
import {
    ProfileOutlined,
    TableOutlined,
    AppstoreOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
    const defaultSidebarProps: MenuProps['items'] = [{
        label: 'Profile',
        key: 'profile',
        icon: <ProfileOutlined />,
        children: [
            {
                label: <Link href={`/${role}`}>Account Profile</Link>,
                key: `/${role}`
            },
            {
                label: <Link href={`/${role}/change-password`}>Change Password</Link>,
                key: `/${role}/change-password`
            }
        ]
    }]

    const AdminSidebarItems: MenuProps['items'] = [
        ...defaultSidebarProps,
        {
            label: "Admin",
            key: 'admin-sidebar',
            icon: <ProfileOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/`}>Manage Admin</Link>,
                    key: `/${role}`
                },
                {
                    label: <Link href={`/${role}/appointments`}>Appointmets</Link>,
                    key: `/${role}/admin/appointments`
                },
                {
                    label: <Link href={`/${role}/customers`}>Customers</Link>,
                    key: `/${role}/customers`
                },
                {
                    label: <Link href={`/${role}/requests`}>Customers Request</Link>,
                    key: `/${role}/customers-request`
                },
            ]
        },
    ]


    const customerItems: MenuProps['items'] = [
        ...defaultSidebarProps,
        {
            label: "Service Request",
            key: "service-request",
            icon: <AppstoreOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/service-request`}>Service Request</Link>,
                    icon: <TableOutlined />,
                    key: `/${role}/service-request`,
                },
                {
                    label: <Link href={`/${role}/appointment`}>Appointment</Link>,
                    icon: <TableOutlined />,
                    key: `/${role}/appointment`,
                },
                {
                    label: <Link href={`/${role}/service-request/tracking`}>Tracking</Link>,
                    icon: <TableOutlined />,
                    key: `/${role}/service-request/tracking`,
                },
            ],
        },
    ];

    if (role === USER_ROLE.ADMIN || role === USER_ROLE.SUPER_ADMIN) return AdminSidebarItems;
    if (role === USER_ROLE.CUSTOMER) return customerItems;
    else {
        return defaultSidebarProps
    }
}