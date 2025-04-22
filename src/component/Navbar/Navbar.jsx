import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Products', link: '/products' },
    { id: 4, name: 'Services', link: '/services' },
  ];

  return (
    <header className="header">
      <div className="containernav">
        <div className="logo">
          <Link to="/">
            <div className="logoatheader">
              <img src="images/logofull.png" alt="logo" />
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navItems.map(item => (
            <Link key={item.id} to={item.link} className={`nav-link ${location.pathname === item.link ? 'active' : ''}`}>
              {item.name}
            </Link>
          ))}
          <Link to="/contactus" className="quote-button">Get in touch</Link>
        </nav>

        {/* Mobile Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className="material-symbols-outlined">
            {mobileMenuOpen ?

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              :

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} >
                <path d="M20 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 5L4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 19L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <Link
            key={item.id}
            to={item.link}
            className={`mobile-nav-link ${location.pathname === item.link ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        ))}
        <Link to="/contactus" className="nav-link" style={{ marginLeft: "20px", marginTop: "10px" }} onClick={closeMenu}>
          Get in touch
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
