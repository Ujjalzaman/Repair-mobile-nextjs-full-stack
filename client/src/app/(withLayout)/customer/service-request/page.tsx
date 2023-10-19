'use client'
import Actionbar from "@/components/UI/ActionBar"
import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
import { useDebounced } from "@/redux/hooks"
import { Button, message } from "antd"
import Link from "next/link"
import { useState } from "react"
import dayjs from 'dayjs';
import {
    DeleteOutlined,
} from "@ant-design/icons";
import { useDeleteServiceRequestMutation, useServiceRequestsQuery } from "@/redux/api/serviceRequestApi"

const ServiceRequest = () => {
    const query: Record<string, any> = {};
    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("")
    const [sortOrder, setSortOrder] = useState<string>("")
    const [searchTerm, setSearchTerm] = useState<string>("");

    query['limit'] = size;
    query['page'] = page;
    query['sortBy'] = sortBy;
    query['sortOrder'] = sortOrder;

    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600
    })

    if (!!debouncedTerm) {
        query['searchTerm'] = debouncedTerm
    }

    const { data, isLoading } = useServiceRequestsQuery({ ...query });
    const [deleteServiceRequest] = useDeleteServiceRequestMutation();
    const deleteHandler = async (id: string) => {
        message.loading("Deleting ...");
        try {
            const res = deleteServiceRequest(id);
            if (!!res) {
                message.success("Successfully Deleted !!");
            }
        } catch (error: any) {
            message.error(error.message);
        }
    }

    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter;
        setSortBy(field as string);
        setSortOrder(order === 'ascend' ? 'asc' : 'desc')
    }

    const onPaginationChange = (page: number, pageSize: number) => {
        setPage(page);
        setSize(pageSize);
    }
    const resetFilters = () => {
        setSortBy("");
        setSearchTerm("");
        setSortOrder("");
    }

    const columns = [
        {
            title: 'deviceType',
            dataIndex: 'deviceType',
            key: 'deviceType'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'

        },
        {
            title: 'issueDescription',
            dataIndex: 'issueDescription',
            key: 'issueDescription'

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
            key: 'Action',
            render: function (data: any) {
                return (
                    <div key={data.id}>
                        <Button onClick={() => deleteHandler(data.id)} type='primary' style={{ margin: "5px 5px" }} danger>
                            <DeleteOutlined />
                        </Button>
                        {data.status === 'ready_for_appointment' &&
                            <Link href={`/customer/appointment/${data.id}`} >
                                <Button type='primary' style={{ margin: "5px 5px" }}>
                                    Get Appointment
                                </Button>
                            </Link>
                        }
                    </div>
                )
            }
        },

    ];

    return (
        <>
            <FBreadCrumb items={[{ label: "dashboard", link: `/dashboard` }]} />
            <Actionbar title="Service Request">
                <div>
                    <Link href="/customer/service-request/create">
                        <Button type='primary'>Create</Button>
                    </Link>
                </div>
            </Actionbar>

            <div style={{ marginTop: '10px' }}>
                <FTable
                    loading={isLoading}
                    columns={columns}
                    dataSource={data}
                    onPaginationChange={onPaginationChange}
                    onTableChange={onTableChange}
                    showPagination={true}
                    pageSize={size}
                    showSizeChanger={true}
                />
            </div>
        </>
    )
}

export default ServiceRequest