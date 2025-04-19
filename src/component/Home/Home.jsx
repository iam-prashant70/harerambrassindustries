import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Products from '../Product/Product';
import Footer from '../Footer/Footer';
import HeroSlider from '../Slider/Heroslider';
import Testimonials from '../Testimonial/Testimonials';
import Contactpage from '../../Pages/Contact/Contactpage';

const Home = () => {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            {/* <section id="home" className="hero-section">
                <div className="hero-slide active">
                    <div className="overlay"></div>
                    <img
                        src="images/meeting.jpg"
                        alt="Innovative Solutions"
                        className="hero-image"
                    />
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Innovative Tech Solutions</h1>
                            <p>Empowering businesses with cutting-edge technology</p>
                            <button className="primary-button">Discover More</button>
                        </div>
                    </div>
                </div>
            </section> */}

            <HeroSlider />

            {/* About Company Section */}
            <section id="about" className="about-section">

                <div className="section-heading">
                    <h2>About Our Company</h2>
                    <div className="underline"></div>
                </div>

                <div className="containernotworking">
                    <div className="about-image">
                        <img src="images/meeting.jpg" alt="About Company" />
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <h3>Leading the Future of Innovation</h3>
                            <p>We are a technology-driven company committed to delivering outstanding digital solutions that drive business success.</p>
                            <div className="about-details">
                                <h4>Our Mission</h4>
                                <p>To innovate and provide the best technological solutions that help businesses thrive in a digital world.</p>
                            </div>
                            <div className="about-details">
                                <h4>Our Vision</h4>
                                <p>To be a global leader in cutting-edge technology, transforming industries with smart and efficient solutions.</p>
                            </div>
                            <br />
                            <div className="stats-grid">
                                <div className="stat-box">
                                    <div className="stat-number">10+</div>
                                    <div className="stat-label">Years Experience</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-number">500+</div>
                                    <div className="stat-label">Projects Completed</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-number">300+</div>
                                    <div className="stat-label">Satisfied Clients</div>
                                </div>
                            </div>
                            <button className="primary-button">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            <Products />

            <Testimonials />

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Have questions or need more information? Get in touch with our team today.
                </p>
            </div>
            <Contactpage />
        </>
    );
};

export default Home;
