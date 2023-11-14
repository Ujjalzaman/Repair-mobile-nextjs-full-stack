'use client';

import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
import { useDebounced } from "@/redux/hooks";
import { Button, message } from "antd";
import { useState, useEffect } from "react";
import dayjs from 'dayjs'
import Link from "next/link";
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined
} from "@ant-design/icons";
import Actionbar from "@/components/UI/ActionBar";
import FModal from "@/components/UI/FModal";
import { useDeleteReviewMutation, useMyReviewsQuery, useReviewQuery, useReviewsQuery } from "@/redux/api/reviewsApi";

const TestimonialPage = () => {
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

    const { data, isLoading } = useMyReviewsQuery({ ...query });
    const [deleteReview] = useDeleteReviewMutation();

    const deleteHandler = async (id: string) => {
        message.loading("Deleting ...");
        try {
            const res = await deleteReview(id);
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
            title: 'Name',
            sorter: true,
            render: function (data: any) {
                return data.user.name
            }
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'email'
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
                        <Button type='primary' style={{ margin: "5px 5px" }}>
                            <EyeOutlined />
                        </Button>

                        <Link href={`/customer/testimonials/edit/${data.id}`}>
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

    // const [skipId, setSkipId] = useState<string>("");
    // const [isSkip, setSkip] = useState<boolean>(true);
    // const { data: adminData } = useReviewQuery(skipId, {
    //     skip: isSkip
    // });
    // const handleView = (id: string) => {
    //     setSkipId(id);
    // }

    // useEffect(() => {
    //     if (skipId !== '') {
    //         setSkip(false);
    //     }
    //     if (adminData && adminData.id) {
    //         showModal();
    //     }
    // }, [adminData, skipId]);

    // const showModal = () => {
    //     setIsVisible(true)
    // }

    // const handleCancel = () => {
    //     setIsVisible(false)
    // }
    return (
        <>
            <FBreadCrumb items={[{ label: `Dashboard`, link: `/dashboard`, }]} />
            <Actionbar title="Testimonials">
                <div>
                    <Link href="/customer/testimonials/create">
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

            {/* <FModal handleCancel={handleCancel} visible={isVisible} title='Review Information.'>
                {adminData?.id ?
                    <div className="text-white">
                        <h6 className="text-capitalize">Reviewer Name : {adminData?.user?.name}</h6>
                        <p>User Id # {adminData?.id}</p>
                        <div className="border p-3">
                            <p className="p-0 m-1">Title : {adminData?.title}</p>
                            <p className="p-0 m-1">Descripition : {adminData?.description}</p>
                            <p className="p-0 m-1">Created At : {dayjs(adminData?.createdAt).format('MMM D, YYYY hh:mm A')}</p>
                        </div>
                    </div>
                    : <h2>Empty....</h2>
                }
            </FModal> */}
        </>
    )
}

export default TestimonialPage;