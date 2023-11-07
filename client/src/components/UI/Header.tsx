import { Dropdown, Layout, MenuProps, Row, Button, Space, Avatar } from 'antd';
import { useRouter } from 'next/navigation';
const { Header: AntHeader, } = Layout;
import { UserOutlined } from "@ant-design/icons";
import { loggedOut } from '@/service/auth.service';
import { authKey } from '@/constants/storageKey';
import { useAppSelector } from '@/redux/hooks';
import { userLoggedOut } from '@/redux/slice/userSlice';
import useAuthCheck from '@/redux/hooks/useAuthCheck';

const Header = () => {
    useAuthCheck();
    const user = useAppSelector((state) => state.auth.user);
    const router = useRouter();

    const logout = () => {
        loggedOut(authKey);
        userLoggedOut(undefined);
        router.push('/');
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
    return (
        <AntHeader className="shadow" style={{ background: "#fff", textTransform: "uppercase" }}>
            <Row
                justify="end"
                align="middle"
                style={{ height: "100%" }}>
                <div className='d-flex gap-2'>
                    <p className='text-uppercase text-black'>{user?.role}</p>
                    <Dropdown menu={{ items }}>
                        <a>
                            <Space wrap size={16}>
                                <Avatar size="large" icon={<UserOutlined />} />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </Row>
        </AntHeader>
    )
}

export default Header