'use client'

import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { Button, Dropdown, MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import { isLoggedIn, loggedOut } from '@/service/auth.service';
import { authKey } from '@/constants/storageKey';
import avatar from '@/assets/avatar.jpg';
import { useAppSelector } from '@/redux/hooks';
import { userLoggedOut } from '@/redux/slice/userSlice';
import useAuthCheck from '@/redux/hooks/useAuthCheck';

export default function HomepageHeader() {
  useAuthCheck();
  const router = useRouter();
  const isLogin = isLoggedIn();
  const user = useAppSelector((state) => state.auth.user);

  const logout = () => {
    loggedOut(authKey);
    userLoggedOut();
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

  return (

    <nav className="navbar navbar-expand-lg bg-light bg-secondary">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image src={logo} width={90} alt='logo' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" href="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" href="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <div className="d-flex">
                {
                  isLogin
                    ?
                    <Dropdown menu={{ items }}>
                      <Link href={user?.role==='admin' ? "/admin/dashboard" : user?.role === 'super_admin' ? '/admin/dashboard' : '/customer/dashboard'} style={{ textDecoration: 'none' }}>
                        <button className='px-2 btn shadow bg-primary d-flex gap-2 align-items-center btn-sm'>
                          <span className='text-white'>
                            Dashboard
                          </span>
                          {
                            user?.profileImg ? <Image src={user?.profileImg} width={25} height={25} alt='image' className='rounded-circle border border-3 border-warning' />
                            :
                            <Image src={avatar} width={25} alt='image' className='rounded-circle border border-3 border-warning' />
                          }
                          
                        </button>
                      </Link>
                    </Dropdown>
                    :
                    <>
                      <Link href={'/login'} className="me-2">
                        <Button type='primary' className='bg-primary'>Login</Button>
                      </Link>
                      <Link href={'/login'} className="">
                        <Button type='primary' className='bg-primary'>SignUp</Button>
                      </Link>
                    </>
                }
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}