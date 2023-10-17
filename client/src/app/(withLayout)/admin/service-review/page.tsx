'use client';

import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
import { useDebounced } from "@/redux/hooks";
import { Button, message } from "antd";
import { useEffect, useState } from "react";
import dayjs from 'dayjs'
import Link from "next/link";
import {
    DeleteOutlined,
    EditOutlined,
    ReloadOutlined,
    EyeOutlined
} from "@ant-design/icons";
import Actionbar from "@/components/UI/ActionBar";
import { useDeleteServiceReviewMutation, useServiceReviewQuery, useServiceReviewsQuery } from "@/redux/api/requestReview";
import FModal from "@/components/UI/FModal";

const RequestReviewPage = () => {
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

    const { data, isLoading } = useServiceReviewsQuery({ ...query });
    const [deleteServiceReview] = useDeleteServiceReviewMutation();

    const deleteHandler = async (id: string) => {
        message.loading("Deleting ...");
        try {
            const res = await deleteServiceReview(id);
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
            title: 'Assign Technician',
            dataIndex: 'technician_assigne_name',
            key: 'technician_assigne_name'
        },
        {
            title: 'Completion Date',
            dataIndex: 'estimated_completion_time',
            key: 'estimated_completion_time'
        },
        {
            title: 'Pickup Date',
            dataIndex: 'ready_for_pickup',
            key: 'ready_for_pickup'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'
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

                        <Link href={`/admin/service-review/edit/${data.id}`}>
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

    const showModal = () => {
        setIsVisible(true)
    }

    const handleCancel = () => {
        setIsVisible(false)
    }
    const [reviewData, setReviewData] = useState<string>("");
    const [isSkip, setSkip] = useState<boolean>(true);
    const { data: serviceData } = useServiceReviewQuery(reviewData, {
        skip: isSkip
    });
    const handleView = (id: string) => {
        setReviewData(id);
    }

    useEffect(() => {
        if (reviewData !== '') {
            setSkip(false);
        }
        if (serviceData && serviceData.id) {
            showModal();
        }
    }, [reviewData, serviceData]);

    return (
        <>
            <FBreadCrumb items={[{ label: `admin`, link: `/admin`, }]} />
            <Actionbar title="Services Review"></Actionbar>
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

            <FModal handleCancel={handleCancel} visible={isVisible} title='Tracking Your Service.'>
                {serviceData?.id ?
                    <div className="text-white">
                        <h6 className="p-0 m-1">Current Status : <span className="text-warning">{serviceData?.status}</span></h6>
                        <p className="p-0 m-1">Assign Technician : <span>{serviceData?.technician_assigne_name}</span></p>
                        <p>Requested Id # {serviceData?.serviceRequestId}</p>
                        <div className="border p-3">
                            <p className="p-0 m-1">Estimated Completion : {dayjs(serviceData?.estimated_completion_time).format('MMM D, YYYY hh:mm A')}</p>
                            <p className="p-0 m-1">Pickup Date  : {dayjs(serviceData?.ready_for_pickup).format('MMM D, YYYY hh:mm A')}</p>
                            <p className="p-0 m-1">Created At : {dayjs(serviceData?.createdAt).format('MMM D, YYYY hh:mm A')}</p>
                        </div>
                    </div>
                    : <h2>Empty....</h2>
                }
            </FModal>
        </>
    )
}

export default RequestReviewPage;