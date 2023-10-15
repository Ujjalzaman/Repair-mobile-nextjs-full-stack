'use client'

import Actionbar from "@/components/UI/ActionBar"
import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
import { useDebounced } from "@/redux/hooks"
import { Button, Input, message } from "antd"
import Link from "next/link"
import { useState } from "react"
import dayjs from 'dayjs';
import {
    DeleteOutlined,
    EditOutlined,
    ReloadOutlined,
    EyeOutlined
} from "@ant-design/icons";
import { useServiceRequestsQuery } from "@/redux/api/serviceRequestApi"

const AdminServiceRequest = () => {
    const query:Record<string, any> = {};
    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy]= useState<string>("")
    const [sortOrder, setSortOrder]= useState<string>("")
    const [searchTerm, setSearchTerm]= useState<string>("");

    query['limit'] = size;
    query['page'] = page;
    query['sortBy'] = sortBy;
    query['sortOrder'] = sortOrder;

    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600
    })

    if(!!debouncedTerm){
        query['searchTerm'] = debouncedTerm
    }

    const {data, isLoading} = useServiceRequestsQuery({...query});

    const deleteHandler = async (id: string) => {
        message.loading("Deleting ...");
        try {
            message.success("Successfully Deleted !!");
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
            dataIndex: 'deviceType'
        },
        {
            title: 'issueDescription',
            dataIndex: 'issueDescription',
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
                        <Link href={`/super_admin/department`}>
                            <Button type='primary' style={{ margin: "5px 5px" }} onClick={() => console.log(data)}>
                                <EyeOutlined />
                            </Button>
                        </Link>
                        <Link href={`/super_admin/department`}>
                            <Button type='primary' style={{ margin: "5px 5px" }}>
                                <EditOutlined />
                            </Button>
                        </Link>
                        <Button onClick={() => deleteHandler(data.id)} type='primary' style={{ margin: "5px 5px" }} danger>
                            <DeleteOutlined />
                        </Button>
                    </>
                )
            }
        },
    ];

    return (
        <>
            <FBreadCrumb
                items={[
                    {
                        label: `admin`,
                        link: `/admin`,
                    },
                ]}
            />
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

export default AdminServiceRequest;