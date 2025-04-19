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
          <h1>Hareram Brass</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navItems.map(item => (
            <Link key={item.id} to={item.link} className="nav-link">
              {item.name}
            </Link>
          ))}
          <Link to="/contactus" className="quote-button">Get in touch</Link>
        </nav>

        {/* Mobile Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <Link
            key={item.id}
            to={item.link}
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        ))}
        <Link to="/contactus" className="quote-button" onClick={closeMenu}>
          Get in touch
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
