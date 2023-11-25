'use client';

import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
import { useDebounced } from "@/redux/hooks";
import { Button, Input } from "antd";
import { useState, useEffect } from "react";
import dayjs from 'dayjs'
import Link from "next/link";
import {
    EditOutlined,
    ReloadOutlined,
    EyeOutlined
} from "@ant-design/icons";
import Actionbar from "@/components/UI/ActionBar";
import FModal from "@/components/UI/FModal";
import { useDeleteReviewMutation, useReviewQuery, useReviewsQuery } from "@/redux/api/reviewsApi";
import { truncate } from "@/helpers/truncate";
import Image from "next/image";
import PopDelete from "@/components/UI/PopDelete";

const TestimonialPage = () => {
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

    const { data, isLoading } = useReviewsQuery({ ...query });
    const review = data?.review?.data;
    const meta = data?.meta;
    const [deleteReview] = useDeleteReviewMutation();

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
            key: 'name',
            render: function (data: any) {
                return data.user.name
            }
        },
        {
            title: 'Title',
            key: 'title',
            dataIndex: 'title',
            sorter: true,
            render: function (data: any) {
                return data && truncate(data, 30)
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: function (data: any) {
                return data && truncate(data, 30)
            }
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
                        <Button type='primary' className="bg-primary" style={{ margin: "5px 5px" }} onClick={() => showModal(data.id)}>
                            <EyeOutlined />
                        </Button>
                        <Link href={`/admin/testimonials/edit/${data.id}`}>
                            <Button type='primary' className="bg-primary" style={{ margin: "5px 5px" }}>
                                <EditOutlined />
                            </Button>
                        </Link>
                        <PopDelete title="Delete Review" fc={() => deleteReview(data.id)} />
                    </>
                )
            }
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [skipId, setSkipId] = useState<string>("");
    const [isSkip, setSkip] = useState<boolean>(true);

    const { data: reviewData } = useReviewQuery(skipId, {
        skip: isSkip
    });
    const showModal = (id: string) => {
        setSkipId(id);
        setIsModalOpen(true);

    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        if (skipId) {
            setSkip(false)
        }
    }, [skipId]);
    return (
        <>
            <FBreadCrumb items={[{ label: `admin`, link: `/admin`, }]} />
            <Actionbar title="Reviews">
                <Input
                    type='text'
                    size='large'
                    placeholder='Search...'
                    style={{ width: "35%" }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div>
                    {(!!sortBy || !!sortOrder || !!searchTerm) && (
                        <Button type="primary" onClick={resetFilters} style={{ margin: '0px 5px' }}>
                            <ReloadOutlined />
                        </Button>
                    )}
                    <Link href="/admin/testimonials/create">
                        <Button type='primary' className="bg-primary">Create</Button>
                    </Link>
                </div>
            </Actionbar>
            <div style={{ marginTop: '10px' }}>
                <FTable
                    loading={isLoading}
                    columns={columns}
                    dataSource={review}
                    onPaginationChange={onPaginationChange}
                    onTableChange={onTableChange}
                    showPagination={true}
                    pageSize={size}
                    showSizeChanger={true}
                    totalPages={meta?.total}
                />
            </div>

            <FModal title="User Information." isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk}>
                {
                    reviewData &&
                    <div className="card">
                        <div className="card-header py-2">
                            <h6 className="text-capitalize">Customer Name : {reviewData?.user?.name}</h6>
                            <p className="mb-0">Created At : {dayjs(reviewData?.createdAt).format('MMM D, YYYY hh:mm A')}</p>
                        </div>
                        <div className="p-2">
                            <p className="mb-0 py-1">Subject : {reviewData?.title}</p>
                            <p className="mb-0 py-1">Review: {reviewData?.description}</p>
                        </div>
                        {reviewData?.img && <Image src={reviewData?.img} alt="user name" width={250} height={100} />}
                    </div>
                }
            </FModal>
        </>
    )
}

export default TestimonialPage;