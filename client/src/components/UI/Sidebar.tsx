"use client";
import { useState } from "react";
import { Button, Layout, Menu } from "antd";
import { sidebarItems } from "@/constants/sidebarItems";
import Image from "next/image";
import avatar from '@/assets/avatar.jpg';
import { getUserInfo } from "@/service/auth.service";
import { useCustomerQuery } from "@/redux/api/customersApi";
import Link from "next/link";

const { Sider } = Layout;

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { id } = getUserInfo() as any;
    const { data } = useCustomerQuery(id);
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={280}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div className="text-center p-3">
                <div className="h-100 w-100 border-rounded">
                    {
                        data && data?.profileImg ? <Image src={data?.profileImg} width={80} height={80} alt="user image" style={{
                            borderRadius: '50%',
                            border: "5px solid #296eb0",
                            objectFit: "cover"
                        }}
                        />
                        :
                        <Image src={avatar} width={80} height={80} alt="user image" style={{
                            borderRadius: '50%',
                            border: "5px solid #296eb0",
                            objectFit: "cover"
                        }}
                        />
                    }

                </div>
                <div className="mt-2">
                    <h4 className="text-capitalize text-white">{data?.name}</h4>
                    <p className="text-white">{data?.email}</p>
                    <div className="gap-2 d-flex">
                    <Link href={`/${data?.role}/view-profile`} className="shadow">
                        <Button type="primary" className="bg-secondary">View Profile</Button>
                    </Link>
                    <Link href={`/`} className="shadow">
                        <Button type="primary" className="bg-primary">Back To Home</Button>
                    </Link>
                    </div>
                </div>
            </div>

            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={sidebarItems(data?.role)}
            />
        </Sider>
    );
};

export default SideBar;
