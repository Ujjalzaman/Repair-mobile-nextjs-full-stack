'use client'

import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '@/assets/logo.png';
import userImage from '@/assets/homepage/user.png';
import Link from 'next/link';

export default function HomepageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="header" style={{ background: "#255598" }}>
      <nav className="nav container">
        <div className="nav__data">
          <Link href="/" className="nav__logo">
            <Image src={logo} width={130} alt='logo' />
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

            <li>
              <Link href="/dashboard" className="nav__link">
                <button className='btn shadow bg-primary p-1 d-flex gap-2 align-items-center'>
                  <span className='text-white'>
                  Dashboard
                  </span>
                  <Image src={userImage} width={30} alt='image' className='rounded-circle'/>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}