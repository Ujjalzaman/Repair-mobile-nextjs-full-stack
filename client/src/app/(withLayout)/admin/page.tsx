'use client';

import FBreadCrumb from "@/components/UI/FBreadCrumb"
import FTable from "@/components/UI/FTable"
import { useCustomerQuery, useCustomersQuery, useDeleteCustomersMutation, useGetAdminsQuery } from "@/redux/api/customersApi";
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
import FModal from "@/components/UI/FModal";

const ManageAdmin = () => {
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

  const { data, isLoading } = useGetAdminsQuery({ ...query });
  const [deleteCustomers] = useDeleteCustomersMutation();

  const deleteHandler = async (id: string) => {
    message.loading("Deleting ...");
    try {
      const res = await deleteCustomers(id);
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
            <Button type='primary' style={{ margin: "5px 5px" }} onClick={() => handleView(data.id)}>
              <EyeOutlined />
            </Button>
            <Link href={`/admin/edit/${data.id}`}>
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
  const [skipId, setSkipId] = useState<string>("");
  const [isSkip, setSkip] = useState<boolean>(true);
  const { data: adminData } = useCustomerQuery(skipId, {
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
      <FBreadCrumb items={[{ label: `admin`, link: `/admin`, }]} />
      <Actionbar title="Manage Admin">
        <div>
          <Link href="/admin/create">
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


      <FModal handleCancel={handleCancel} visible={isVisible} title='Tracking Your Service.'>
        {adminData?.id ?
          <>
            <h4>Name : {adminData?.name}</h4>
            <h3>Curretn Status : {adminData?.email}</h3>
            <h1>Service Requiest id - {adminData?.role}</h1>
            <p>Assig technician Name: {adminData?.address}</p>
            <p>Completion Estimate Time: {adminData?.createdAt}</p>
          </>
          : <h2>Not found....</h2>
        }
      </FModal>
    </>
  )
}

export default ManageAdmin