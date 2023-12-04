'use client';

import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
import { useDeleteCustomersMutation, useGetAdminsQuery } from "@/redux/api/customersApi";
import { Button } from "antd";
import dayjs from 'dayjs'
import Link from "next/link";
import { EditOutlined } from "@ant-design/icons";
import Actionbar from "@/components/UI/ActionBar";
import PopDelete from "@/components/UI/PopDelete";

const ManageAdmin = () => {
  const { data, isLoading } = useGetAdminsQuery({});
  const [deleteCustomers] = useDeleteCustomersMutation();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role'
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
            <Link href={`/admin/customers/edit/${data.id}`}>
              <Button className="bg-primary text-white" style={{ margin: "5px 5px" }}>
                <EditOutlined />
              </Button>
            </Link>
            <PopDelete title="Delete Admin" fc={() => deleteCustomers(data.id)} />
          </>
        )
      }
    },
  ];

  return (
    <>
      <FBreadCrumb items={[{ label: `dashboard`, link: `/admin/dashboard`, }]} />
      <Actionbar title="Manage Admin">
        <div>
          <Link href="/admin/create">
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
    </>
  )
}

export default ManageAdmin