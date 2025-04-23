import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate, useLocation,Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About Us', link: '/about' },
    { id: 3, name: 'Products', link: '/products' },
    { id: 4, name: 'Services', link: '/services' },
  ];

  const applyFullHeightLock = () => {
    document.documentElement.classList.add('full-height');
    document.body.classList.add('full-height');
    const root = document.getElementById('root');
    if (root) root.classList.add('full-height');
  };

  const removeFullHeightLock = () => {
    document.documentElement.classList.remove('full-height');
    document.body.classList.remove('full-height');
    const root = document.getElementById('root');
    if (root) root.classList.remove('full-height');
  };

  const handleLinkClick = (path) => {
    if (location.pathname === path) return;

    applyFullHeightLock();         // lock scrolling immediately
    setOverlayActive(true);       // start the animation

    setTimeout(() => {
      navigate(path);             // route change
    }, 1700); // slightly before overlay ends, improves perceived perf

    setTimeout(() => {
      removeFullHeightLock();     // release scroll AFTER route change
      setOverlayActive(false);
    }, 3000); // give time for layout to stabilize before unlocking scroll
  };


  return (
    <>
      {overlayActive && (
        <div className="overlayreturns">
          <img src="images/logofull.png" alt="loading" />
        </div>
      )}

      <header className="header">
        <div className="containernav">
          <div className="logo">
            <Link to="/">
              <div className="logoatheader">
                <img src="images/logofull.png" alt="logo" />
              </div>
            </Link>
          </div>

          <nav className="nav-desktop">
            {navItems.map(item => (
              <span
                key={item.id}
                className={`nav-link ${location.pathname === item.link ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.link)}
              >
                {item.name}
              </span>
            ))}
            <button onClick={() => handleLinkClick('/contactus')} className="quote-button">
              Get in touch
            </button>
          </nav>

          <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
          </button>
        </div>

        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <span
              key={item.id}
              className={`mobile-nav-link ${location.pathname === item.link ? 'active' : ''}`}
              onClick={() => handleLinkClick(item.link)}
            >
              {item.name}
            </span>
          ))}
          <span
            onClick={() => handleLinkClick('/contactus')}
            className="nav-link"
            style={{ marginLeft: "20px", marginTop: "10px" }}
          >
            Get in touch
          </span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
