import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3 className="footer-title">IndusTech</h3>
                        <p className="footer-text">
                            Leading provider of advanced industrial solutions, committed to
                            innovation and excellence since 2005.
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
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Services</h4>
                        <ul className="footer-list">
                            <li><a href="#">Industrial Automation</a></li>
                            <li><a href="#">Process Optimization</a></li>
                            <li><a href="#">Energy Management</a></li>
                            <li><a href="#">Safety Solutions</a></li>
                            <li><a href="#">Maintenance Services</a></li>
                        </ul>
                    </div>

            
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 IndusTech Solutions. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
            {/* Back to Top Button */}
            <a href="#home" className="back-to-top">
                <i className="fa-solid fa-arrow-up"></i>
            </a>
        </footer>
    );
};

export default Footer;
