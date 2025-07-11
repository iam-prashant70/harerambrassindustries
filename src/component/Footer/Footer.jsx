import React,{useEffect} from "react";
import "./Footer.css";
import { Link,useLocation } from "react-router-dom";

const Footer = () => {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [location]);
    
    return (
        <footer className="footer">
            <div className="container" style={{ marginTop: "10vh" }}>
                <div className="footer-grid">
                    <div className="footer-section">
                        <div style={{ display: "flex", gap: "1em" }}>
                            <div className="logoatfooter">
                                <img src="images/logowhite.png" alt="logo footer" />
                            </div>
                            <h3 style={{ color: "white" }}>Hareram Brass<br />Industries</h3>
                        </div>
                        <p className="footer-text">
                            We are a leading brass parts manufacturing company dedicated to delivering high-quality, precision-engineered components for a wide range of industries since 2003.
                        </p>
                        <div className="social-icons">
                            <a href="#" className="social-link"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="social-link"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="social-link"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="social-link"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <ul className="footer-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Products</h4>
                        <ul className="footer-list">
                            <li>
                                <Link to="/products">
                                    Brass taps
                                </Link>
                            </li>
                            <li>
                                <Link to="/products">
                                    valves
                                </Link>
                            </li>
                            <li>
                                <Link to="/products">
                                    faucets
                                </Link>
                            </li>
                            <li>
                                <Link to="/products">
                                    Pipe connectors and unions
                                </Link>
                            </li>
                            <li>
                                <Link to="/products">
                                    Compression fittings
                                </Link>
                            </li>
                            <li>
                                <Link to="/products">
                                    Shower fittings
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Services</h4>
                        <ul className="footer-list">
                            <li>
                                <Link to="/services">
                                    Industrial Automation
                                </Link>
                            </li>
                            <li>
                                <Link to="/services">
                                    Process Optimization
                                </Link>
                            </li>
                            <li>
                                <Link to="/services">
                                    Energy Management
                                </Link>
                            </li>
                            <li>
                                <Link to="/services">
                                    Safety Solutions
                                </Link>
                            </li>
                            <li>
                                <Link to="/services">
                                    Maintenance Services
                                </Link>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Hareram Brass Industries. All rights reserved.</p>
                {/* <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div> */}
                <br />
                <div className="footer-links">
                    <Link to="/devs"><i className="thedevs">Developed by ' Ratnesh ' & ' Prashant  ' </i></Link>
                </div>
            </div>
            <a href="https://wa.me/9712580007" className="back-to-top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#ffffff"} fill={"none"} >
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </a>
        </footer>
    );
};

export default Footer;
