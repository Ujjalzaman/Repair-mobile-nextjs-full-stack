'use client'

import Actionbar from "@/components/UI/ActionBar"
import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
import dayjs from 'dayjs';
import { truncate } from "@/helpers/truncate"
import { useDeleteOrderMutation, useOrdersQuery } from "@/redux/api/orderApi"
import PopDelete from "@/components/UI/PopDelete"

const AllOrder = () => {
    const { data, isLoading } = useOrdersQuery({});
    const [deleteOrder] = useDeleteOrderMutation();
    const columns = [
        {
            title: 'TotalAmount',
            dataIndex: 'totalAmount',
            sorter: true,
            key: 'title',
            render: function (data: any) {
                return data && truncate(data, 30)
            }
        },
        {
            title: 'Is Paid',
            dataIndex: 'isPaid',
            key: 'isPaid',
            render: function(data:any){
                return <>{data?.isPaid ? 'Paid' : 'N/A'}</>
            }
        },
        {
            title: 'InvoiceNumber',
            dataIndex: 'invoiceNumber',
            key: 'invoiceNumber',
        },
        {
            title: 'createdAt',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: function (data: any) {
                return data && dayjs(data).format('MMM D, YYYY hh:mm A');
            }
        },
        {
            title: 'Action',
            key: "action",
            render: function (data: any) {
                return (
                    <PopDelete title="Service Request" fc={() => deleteOrder(data.id)} />
                )
            }
        },
    ];

    return (
        <>
            <FBreadCrumb items={[{ label: "dashboard", link: "/admin/dashboard", },]} />
            <Actionbar title="Order"></Actionbar>
            <div style={{ marginTop: '10px' }}>
                <FTable
                    loading={isLoading}
                    columns={columns}
                    dataSource={data}
                    showPagination={true}
                    showSizeChanger={true}
                />
            </div>
        </>
    )
}

export default AllOrder;