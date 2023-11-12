'use client'

import Actionbar from "@/components/UI/ActionBar"
import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
import { Button } from "antd"
import Link from "next/link"
import dayjs from 'dayjs';
import {
    EditOutlined
} from "@ant-design/icons";
import { useAppointmentQuery } from "@/redux/api/serviceApi"

const Appointment = () => {
    const { data, isLoading } = useAppointmentQuery({ limit: 10 });
    const appointData = data?.data
    const columns = [
        {
            title: 'Appointment Date',
            dataIndex: 'appointment_date',
            render: function (data: any) {
                return data && dayjs(data).format('MMM D, YYYY hh:mm A');
            }
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',

        },

        {
            title: 'Device',
            dataIndex: 'deviceIssue',
            key: 'deviceIssue',
        },
        {
            title: 'createdAt',
            dataIndex: 'createdAt',
            key: 'createdAt',
            sorter: true,
            render: function (data: any) {
                return data && dayjs(data).format('MMM D, YYYY hh:mm A');
            }
        },
        {
            title: 'Action',
            render: function (data: any) {
                return (
                    <>
                        <Link href={`/customer/service-request/edit/${data?.id}`}>
                            <Button type='primary' style={{ margin: "5px 5px" }}>
                                <EditOutlined />
                            </Button>
                        </Link>
                    </>
                )
            }
        },

    ];

    return (
        <>
            <FBreadCrumb items={[{ label: "service-request", link: "/service-request", },]} />
            <Actionbar title="Schedule Appointment">
            </Actionbar>

            <div style={{ marginTop: '10px' }}>
                <FTable
                    loading={isLoading}
                    columns={columns}
                    dataSource={appointData}
                    showPagination={true}
                    showSizeChanger={true}
                />
            </div>
        </>
    )
}

export default Appointment;