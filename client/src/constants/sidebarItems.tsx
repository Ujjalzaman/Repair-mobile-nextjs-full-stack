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

    const commonAdminSidebar: MenuProps['items'] = [
        {
            label: <Link href={`/${role}/manage-students`}>Manage Students</Link>,
            key: `/${role}/manage-students`,
            icon: <ProfileOutlined />,
        },
        {
            label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
            key: `/${role}/manage-faculty`,
            icon: <ProfileOutlined />,
        },
    ]

    const AdminSidebarItems: MenuProps['items'] = [
        ...defaultSidebarProps,
        ...commonAdminSidebar,
        {
            label: "Manage Academic",
            key: 'manage-academic',
            icon: <ProfileOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
                    key: `/${role}/acadmic/faculty`
                },
                {
                    label: <Link href={`/${role}/academic/department`}>Departments</Link>,
                    key: `/${role}/acadmic/department`
                },
                {
                    label: <Link href={`/${role}/academic/semesters`}>Semesters</Link>,
                    key: `/${role}/acadmic/semesters`
                }
            ]
        },
        {
            label: "Management",
            key: 'management',
            icon: <ProfileOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/academic/faculty`}>Department</Link>,
                    key: `/${role}/department`
                },
                {
                    label: <Link href={`/${role}/academic/departments`}>Building</Link>,
                    key: `/${role}/building`
                },
                {
                    label: <Link href={`/${role}/academic/semesters`}>Rooms</Link>,
                    key: `/${role}/rooms`
                },
                {
                    label: <Link href={`/${role}/academic/semesters`}>Course</Link>,
                    key: `/${role}/course`
                },
                {
                    label: <Link href={`/${role}/semester-registration`}>Semester registration</Link>,
                    key: `/${role}/semester-registration`,
                },
                {
                    label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
                    key: `/${role}/offered-course`,
                },
                {
                    label: <Link href={`/${role}/offered-course-section`}>Course sections</Link>,
                    key: `/${role}/offered-course-section`,
                },
                {
                    label: <Link href={`/${role}/offered-course-schedule`}>Course schedules</Link>,
                    key: `/${role}/offered-course-schedule`,
                },
            ]
        }
    ]

    const superAdminSidebarItems: MenuProps['items'] = [
        ...defaultSidebarProps,
        ...commonAdminSidebar,
        {
            label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
            icon: <TableOutlined />,
            key: `/${role}/admin`,
        },
        {
            label: <Link href={`/${role}/user`}>Manage User</Link>,
            icon: <TableOutlined />,
            key: `/${role}/user`,
        },
        {
            label: "Management",
            key: "management",
            icon: <AppstoreOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/department`}>Department</Link>,
                    key: `/${role}/department`,
                },
            ],
        },
    ];

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
                    label: <Link href={`/${role}/service-request/tracking`}>Tracking</Link>,
                    icon: <TableOutlined />,
                    key: `/${role}/service-request/tracking`,
                },
            ],
        },
    ];


    if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems
    if (role === USER_ROLE.ADMIN) return AdminSidebarItems;
    if (role === USER_ROLE.CUSTOMER) return customerItems;
    else {
        return defaultSidebarProps
    }
}