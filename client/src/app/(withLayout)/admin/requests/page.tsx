'use client'

import Actionbar from "@/components/UI/ActionBar"
import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
import { useDebounced } from "@/redux/hooks"
import { Button, message } from "antd"
import Link from "next/link"
import { useEffect, useState } from "react"
import dayjs from 'dayjs';
import {
    DeleteOutlined,
    EditOutlined,
    ReloadOutlined,
    EyeOutlined
} from "@ant-design/icons";
import { useDeleteServiceRequestMutation, useGetSingleserviceRequestQuery, useServiceRequestsQuery } from "@/redux/api/serviceRequestApi"
import FModal from "@/components/UI/FModal"

const AdminServiceRequest = () => {
    const query: Record<string, any> = {};
    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("")
    const [sortOrder, setSortOrder] = useState<string>("")
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>(false);


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
            const res = await deleteServiceRequest(id);
            if (res) {
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
            dataIndex: 'deviceType'
        },
        {
            title: 'Status',
            dataIndex: 'status'
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
                        <Button type='primary' style={{ margin: "5px 5px" }} onClick={() => handleView(data.id)}>
                            <EyeOutlined />
                        </Button>

                        <Link href={`/admin/requests/edit/${data.id}`}>
                            <Button type='primary' style={{ margin: "5px 5px" }}>
                                <EditOutlined />
                            </Button>
                        </Link>
                        <Button onClick={() => deleteHandler(data.id)} type='primary' style={{ margin: "5px 5px" }} danger>
                            <DeleteOutlined />
                        </Button>
                        {data.reviewed
                            ?
                            <Button type='dashed' style={{ margin: "5px 5px" }}>
                                View Reviewed
                            </Button>

                            : <Link href={`/admin/service-review/${data.id}`}>
                                <Button type='primary' style={{ margin: "5px 5px" }}>
                                    Review
                                </Button>
                            </Link>
                        }

                    </>
                )
            }
        },
    ];

    const [skipId, setSkipId] = useState<string>("");
    const [isSkip, setSkip] = useState<boolean>(true);
    const { data: adminData } = useGetSingleserviceRequestQuery(skipId, {
        skip: isSkip
    });
    const handleView = (id: string) => {
        setSkipId(id);
    }

    useEffect(() => {
        if (skipId !== '') {
            setSkip(false);
        }
        if (adminData && adminData.id) {
            showModal();
        }
    }, [adminData, skipId]);

    const showModal = () => {
        setIsVisible(true)
    }

    const handleCancel = () => {
        setIsVisible(false)
    }

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
            <Actionbar title="Customer Requests"></Actionbar>

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

            <FModal handleCancel={handleCancel} visible={isVisible} title='Customer Requests Information.'>
                {adminData?.id ?
                    <div className="text-white">
                        <h6 className="text-capitalize">Deivce Name : {adminData?.deviceType}</h6>
                        <p>Request Id # {adminData?.id}</p>
                        <div className="border p-3">
                            <p className="p-0 m-1">Issue Description : {adminData?.issueDescription}</p>
                            {/* <p className="p-0 m-1"> {adminData?.reviewed}</p> */}
                            <p className="p-0 m-1">Requested Date: {dayjs(adminData?.createdAt).format('MMM D, YYYY hh:mm A')}</p>
                        </div>

                    </div>
                    : <h2>Empty....</h2>
                }
            </FModal>
        </>
    )
}

export default AdminServiceRequest;