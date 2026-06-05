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

        <button
          className="mobileMenuButton"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <Menu />
          )}
        </button>

       <HeaderMenu mobileMenuOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        <button className="contactButton mobile-hidden" onClick={() => window.location.href = '/contact-us'}>Contact Us</button>

      </div>
    </header>

  );
};

export default Header;
