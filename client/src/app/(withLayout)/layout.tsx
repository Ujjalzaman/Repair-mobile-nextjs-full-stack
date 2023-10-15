'use client';

import Contents from "@/components/UI/Content";
import SideBar from "@/components/UI/Sidebar";
import { isLoggedIn } from "@/service/auth.service";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isUserLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push('/login');
    }
    setIsLoading(true)
  }, [setIsLoading, router, isUserLoggedIn]);

  if (!isLoading) {
    return <Row
      justify="center"
      align="middle"
      style={{ height: "100vh" }}
    >
      <Space>
        <Spin tip="Loading" size='large' />
      </Space>
    </Row>
  }

  return (
    <Layout hasSider style={{ minHeight: '100vh' }}>
      <SideBar />
      <Contents>
        {children}
      </Contents>
    </Layout>
  )
}

export default DashboardLayout;