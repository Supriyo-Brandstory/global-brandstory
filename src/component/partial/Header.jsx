"use client";
import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
  
    <header className="header">
      <div className="headerContainer">
        <div className="logo">
          BRANDSTORY<span>®</span>
        </div>

        <button className="mobileMenuButton" onClick={toggleMobileMenu}>
          <Menu />
        </button>

       <HeaderMenu mobileMenuOpen={mobileMenuOpen}/>
        <button className="contactButton">Contact Us</button>

      </div>
    </header>

  );
};

export default Header;
