'use client'

import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '../../assets/logo.png';

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
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <Image src={logo} width={150} alt='logo'/>
          </a>

         
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

            <li className="dropdown__item">
              <div className="nav__link dropdown__button">
                Company
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}