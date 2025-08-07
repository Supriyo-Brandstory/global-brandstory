"use client";
import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import HeaderMenu from './HeaderMenu';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
  
    <header className="header">
      <div className="headerContainer">
        <div className="logo">
          <Link href="/">
          <img src='/images/logo.png' alt="logo" className='headerLogo' />
          </Link>
        </div>

        <button className="mobileMenuButton" onClick={toggleMobileMenu}>
          <Menu />
        </button>

       <HeaderMenu mobileMenuOpen={mobileMenuOpen}/>
        <button className="contactButton mobile-hidden">Contact Us</button>

      </div>
    </header>

  );
};

export default Header;
