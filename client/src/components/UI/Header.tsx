import { Dropdown, Layout, MenuProps, Row, Button, Space, Avatar } from 'antd';
import { useRouter } from 'next/navigation';
const { Header: AntHeader, } = Layout;
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, loggedOut } from '@/service/auth.service';
import { authKey } from '@/constants/storageKey';

const Header = () => {
    const router = useRouter();
    const logout = () => {
        loggedOut(authKey);
        router.push('/login');
    }
    const items: MenuProps["items"] = [
        {
            key: "0",
            label: (
                <Button onClick={logout} type="text" danger>
                    Logout
                </Button>
            ),
        },
    ];
    const { role } = getUserInfo() as any;
    return (
        <AntHeader
            style={{
                background: "#fff",
                textTransform: "uppercase"
            }}
        >
            <Row
                justify="end"
                align="middle"
                style={{
                    height: "100%",
                }}
            >
                <p style={{ margin: '0 5px' }}>{role}</p>
                <Dropdown menu={{ items }}>
                    <a>
                        <Space wrap size={16}>
                            <Avatar size="large" icon={<UserOutlined />} />
                        </Space>
                    </a>
                </Dropdown>
            </Row>
        </AntHeader>
    )
}

export default Header