'use client';

import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
import { useCustomerQuery, useCustomersQuery, useDeleteCustomersMutation } from "@/redux/api/customersApi";
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
import Image from "next/image";
import PopDelete from "@/components/UI/PopDelete";

const CustomersPage = () => {
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

  const { data, isLoading } = useCustomersQuery({ ...query });
  const users = data?.users?.data;
  const meta = data?.meta;
  const [deleteCustomers] = useDeleteCustomersMutation();

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
      dataIndex: 'name',
      key: 'nameCustomer',
      sorter: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'emailCustomer',
      sorter: true,

    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'roleCustomer'
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
      key: 'createdAtCustomer',
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
          <>
            <Button type='primary' className="bg-primary" style={{ margin: "5px 5px" }} onClick={() => showModal(data.id)}>
              <EyeOutlined />
            </Button>

            <Link href={`/admin/customers/edit/${data.id}`}>
              <Button type='primary' className="bg-primary" style={{ margin: "5px 5px" }}>
                <EditOutlined />
              </Button>
            </Link>
            <PopDelete title="Service Request" fc={() => deleteCustomers(data.id)} />
          </>
        )
      }
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skipId, setSkipId] = useState<string>("");
  const [isSkip, setSkip] = useState<boolean>(true);

  const { data: userData } = useCustomerQuery(skipId, {
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
      <Actionbar title="Customers">
        <Input
          type='text'
          size='large'
          placeholder='Search...'
          style={{ width: "35%" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button type="primary" className="bg-primary me-2" onClick={resetFilters}>
              <ReloadOutlined />
            </Button>
          )}
          <Link href="/admin/customers/create">
            <Button type='primary' className="bg-primary">Create</Button>
          </Link>
        </div>
      </Actionbar>
      <div style={{ marginTop: '10px' }}>
        <FTable
          loading={isLoading}
          columns={columns}
          dataSource={users}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
          pageSize={size}
          showSizeChanger={true}
          totalPages={meta?.total}
        />
      </div>
      <>
        <FModal title="User Information." isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk}>
          {
            userData &&

            <div className="card">
              <div className="card-header py-2">
                <h5 className="text-capitalize">Customer Name : {userData?.name}</h5>
                <p className="mb-0">Created At : {dayjs(userData?.createdAt).format('MMM D, YYYY hh:mm A')}</p>
              </div>
              <div className="p-2">
                <p className="mb-0 py-1">User Email : {userData?.email}</p>
                <p className="mb-0 py-1">Role : {userData?.role}</p>
                <p className="mb-0 py-1">Address : {userData?.address}</p>
              </div>
              {userData?.profileImg && <Image src={userData?.profileImg} alt="user name" width={250} height={100} />}
            </div>
          }
        </FModal>
      </>
    </>
  )
}

export default CustomersPage