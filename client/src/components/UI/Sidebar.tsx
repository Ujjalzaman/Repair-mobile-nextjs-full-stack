"use client";

import { useState } from "react";
import { Button, Layout, Menu } from "antd";

import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/service/auth.service";
import Image from "next/image";
import logo from '../../assets/profile.jpg';

const { Sider } = Layout;

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { role } = getUserInfo() as any;

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
                <Image src={logo} width={70}  height={70} alt="logo"
                style={{
                    borderRadius: '50%',
                    border:"5px solid #296eb0",
                    objectFit:"cover"
                }}
                />
                </div>
                <h4 className="text-uppercase">Jhon Wick</h4>
                <p>Email: UjjalZaman@gmail.com</p>
                <Button type="primary">View Profile</Button>
            </div>
  
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={sidebarItems(role)}
            />
        </Sider>
    );
};

export default SideBar;
