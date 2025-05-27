"use client";
import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';

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

        <nav className={mobileMenuOpen ? "navLinksMobile" : "navLinks"}>
          <div className="navItem">
            Company <ChevronDown size={16} />
            <div className="dropdown">
              <a href="#" className="dropdownItem">About Us</a>
              <a href="#" className="dropdownItem">Our Team</a>
              <a href="#" className="dropdownItem">Careers</a>
              <a href="#" className="dropdownItem">Partners</a>
            </div>
          </div>

          <div className="navItem">
            Services <ChevronDown size={16} />
            <div className="dropdown">
              <div className="dropdownContainer">
                <div className="dropdownSection">
                  <a href="#" className="dropdownItem">Software Development Services</a>
                  <a href="#" className="dropdownItem">Consulting</a>
                  <a href="#" className="dropdownItem">Mobile App Development</a>
                  <a href="#" className="dropdownItem">Web Application Development</a>
                  <a href="#" className="dropdownItem">Full Stack Development</a>
                  <a href="#" className="dropdownItem">API Development & Integration</a>
                  <a href="#" className="dropdownItem">CRM Integration</a>
                  <a href="#" className="dropdownItem">UI/UX Design Services</a>
                </div>
                <div className="dropdownSection dropdownGroup">
                  <a href="#" className="dropdownItem">Software Consulting Services</a>
                  <a href="#" className="dropdownItem">Custom Software Development</a>
                  <a href="#" className="dropdownItem">Software Architecture & Wireframe</a>
                  <a href="#" className="dropdownItem">Software Maintenance & Support</a>
                  <a href="#" className="dropdownItem">Database development</a>
                  <a href="#" className="dropdownItem">Enterprise Software Development Services</a>
                </div>
              </div>
            </div>
          </div>

          <div className="navItem">
            Technologies <ChevronDown size={16} />
            <div className="dropdown">
              <a href="#" className="dropdownItem">Web Technologies</a>
              <a href="#" className="dropdownItem">Mobile Technologies</a>
              <a href="#" className="dropdownItem">Cloud & DevOps</a>
              <a href="#" className="dropdownItem">Artificial Intelligence</a>
            </div>
          </div>

          <div className="navItem">
            Industries <ChevronDown size={16} />
            <div className="dropdown">
              <a href="#" className="dropdownItem">Healthcare</a>
              <a href="#" className="dropdownItem">Finance</a>
              <a href="#" className="dropdownItem">E-commerce</a>
              <a href="#" className="dropdownItem">Education</a>
              <a href="#" className="dropdownItem">Manufacturing</a>
            </div>
          </div>

        </nav>
        <button className="contactButton">Contact Us</button>

      </div>
    </header>

  );
};

export default Header;
