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
    EditOutlined,
    ReloadOutlined,
    EyeOutlined
} from "@ant-design/icons";
import { useBlogsQuery, useDeleteBlogMutation } from "../../../../redux/api/blogApi"
import { truncate } from "@/helpers/truncate"

const Appointment = () => {
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

    const { data, isLoading } = useBlogsQuery({ ...query });
    const [deleteBlog] = useDeleteBlogMutation();
  
    const deleteHandler = async (id: string) => {
        message.loading("Deleting ...");
        try {
            const res = await deleteBlog(id);
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
            title: 'Title',
            dataIndex: 'title',
            render: function(data:any){
                return data && truncate(data, 30)
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: function(data:any){
                return data && truncate(data, 50)

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
                        <Link href={`/admin/blog/edit/${data.id}`}>
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
            <FBreadCrumb items={[{ label: "dashboard", link: "/admin/dashboard", },]} />
            <Actionbar title="Blog">
                <div>
                    <Link href="/admin/blog/create">
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

export default Appointment;