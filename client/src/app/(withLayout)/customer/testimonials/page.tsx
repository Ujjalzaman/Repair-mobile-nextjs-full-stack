'use client';

import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
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
import { useDeleteReviewMutation, useMyReviewsQuery, useReviewQuery } from "@/redux/api/reviewsApi";
import Image from "next/image";
import { truncate } from "@/helpers/truncate";

const TestimonialPage = () => {
    const { data, isLoading } = useMyReviewsQuery({});
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
            key: 'title',
            render: function (data: any) {
                return truncate(data, 25);
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: function (data: any) {
                return truncate(data, 25);
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
                        <Button className="bg-primary" type='primary' style={{ margin: "5px 5px" }} onClick={() => showModal(data.id)}>
                            <EyeOutlined />
                        </Button>

                        <Link href={`/customer/testimonials/edit/${data.id}`}>
                            <Button className="bg-primary" type='primary' style={{ margin: "5px 5px" }}>
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
            <FBreadCrumb items={[{ label: `Dashboard`, link: `/customer/dashboard`, }]} />
            <Actionbar title="My Reviews">
                <div>
                    <Link href="/customer/testimonials/create">
                        <Button type='primary' className="bg-primary">Create</Button>
                    </Link>
                </div>
            </Actionbar>
            <div style={{ marginTop: '10px' }}>
                <FTable
                    loading={isLoading}
                    columns={columns}
                    dataSource={data}
                    showPagination={true}
                    showSizeChanger={true}
                />
            </div>

            <>
                <FModal title="User Information." isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk}>
                    {
                        reviewData &&
                        <div className="card">
                            <div className="card-header py-2">
                                <h5 className="text-capitalize">User Name : {reviewData?.user?.name}</h5>
                                <p className="mb-0">Created At : {dayjs(reviewData?.createdAt).format('MMM D, YYYY hh:mm A')}</p>
                            </div>
                            <div className="p-2">
                                <p className="mb-0 py-1">Subject : {reviewData?.title}</p>
                                <p className="mb-0 py-1">Review : {reviewData?.description}</p>
                            </div>
                            {reviewData?.user?.profileImg && <Image src={reviewData?.user?.profileImg} alt="user name" width={250} height={100} />}
                        </div>
                    }
                </FModal>
            </>
        </>
    )
}

export default TestimonialPage;