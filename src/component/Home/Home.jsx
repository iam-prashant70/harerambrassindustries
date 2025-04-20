import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Products from '../Product/Product';
import HeroSlider from '../Slider/Heroslider';
import Testimonials from '../Testimonial/Testimonials';
import Contactpage from '../../Pages/Contact/Contactpage';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Navbar />

            <HeroSlider />

            <section id="about" className="about-section">
                <div className="containernotworking">
                    <div className="about-image">
                        <img src="images/meeting.jpg" alt="About Company" />
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <h3>About us</h3>
                            <p>We are a leading brass parts manufacturing company dedicated to delivering high-quality, precision-engineered components for a wide range of industries. With years of experience and a strong foundation in metal craftsmanship, our company has earned a reputation for reliability, durability, and innovation. From the selection of raw materials to the final finishing, every process is handled with utmost care to ensure superior quality and customer satisfaction.</p>
                            <br /><div className="about-details">
                                <h3>Our Specialization</h3>
                                <p>Our core specialization lies in manufacturing customized brass components such as brass electrical parts, sanitary fittings, automotive parts, gas fittings, inserts, terminals, and precision-turned parts. We cater to both domestic and international markets, providing products that meet global standards in terms of quality, finish, and performance. With modern machinery, skilled technicians, and a commitment to excellence, we ensure timely delivery and complete client satisfaction in every order.</p>
                            </div>

                            <br />
                            <div className="stats-grid">
                                <div className="stat-box">
                                    <div className="stat-number">22+</div>
                                    <div className="stat-label">Years Experience</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-number">100+</div>
                                    <div className="stat-label">Products Completed</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-number">60+</div>
                                    <div className="stat-label">Satisfied Clients</div>
                                </div>
                            </div>


                            <button className="primary-button">
                                <Link to="/about">
                                    Learn More
                                </Link>

                            </button>
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
