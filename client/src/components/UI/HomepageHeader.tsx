'use client'

import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { Button, Dropdown, MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import { getUserInfo, isLoggedIn, loggedOut } from '@/service/auth.service';
import { authKey } from '@/constants/storageKey';
import avatar2 from '@/assets/ani/2.png';
import avatar from '@/assets/ani/3.jpg';

export default function HomepageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const isLogin = isLoggedIn();
  const {role} = getUserInfo() as any;
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
  useEffect(() => {
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) {
      navToggle.addEventListener('click', toggleMenu);
    }
    return () => {
      if (navToggle) {
        navToggle.removeEventListener('click', toggleMenu);
      }
    };
  }, [isMenuOpen]);

  return (
    <header className="header" style={{ 
      background: "#fff",
       maxHeight: '60px',
       boxShadow:'0px 0px 8px 0px #d8d6d6'
      }}>
      <nav className="nav container">
        <div className="nav__data">
          <Link href="/" className="nav__logo">
            <Image src={logo} width={90} alt='logo' />
          </Link>
        </div>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li>
              <a href="#" className="nav__link">
                Home
              </a>
            </li>

            <li className="dropdown__item">
              <div className="nav__link dropdown__button">
                Discover
              </div>
            </li>

            <li className="dropdown__item">
              <div className="nav__link dropdown__button">
                Resources
              </div>
            </li>

            <li>
              <a href="#" className="nav__link">
                Pricing
              </a>
            </li>
            {
              isLogin
                ? <li>
                  <Dropdown menu={{ items }}>
                    <Link href="/dashboard" className="nav__link">
                      <button className='px-2 btn shadow bg-primary d-flex gap-2 align-items-center btn-sm'>
                        <span className='text-white'>
                          Dashboard
                        </span>
                        <Image src={role === 'admin' ? avatar : avatar2} width={25} alt='image' className='rounded-circle border border-3 border-warning' 
                        />
                       
                      </button>
                    </Link>
                  </Dropdown>
                </li>
                :
                <li>
                  <Link href={'/login'} className="nav__link">
                    <Button type='primary'>Login</Button>
                  </Link>
                </li>
            }
          </ul>
        </div>
      </nav>
    </header>
  );
}