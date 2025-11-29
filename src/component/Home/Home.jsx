import React from 'react';
import './Home.css';
import './Home2.css';
import Navbar from '../Navbar/Navbar';
import Products from '../Product/Product';
import HeroSlider from '../Slider/Heroslider';
import Testimonials2 from '../Testimonial/Testimonials2';
import Contactpage from '../../Pages/Contact/Contactpage';
import { Link } from 'react-router-dom';
import DemoCarousel from '../Slider/DemoCarousel';
import SliderHome from './SliderHome';

const Home = () => {
    return (
        <>



            <div className="overlayreturnsactive" style={{ animationDuration: 3 }}>
                <img src="images/logofull.png" alt="loading" />
            </div>


            <Navbar />

            {/* <HeroSlider /> */}
            <SliderHome />
            {/* <DemoCarousel /> */}

            <section id="about" className="about-section">
                <div className="containernotworking" style={{ marginTop: "0px" }}>
                    <div className="about-image">
                        <img src="images/veticalposter.jpg" className='heroimage hroimg1' alt="About Company" />
                        <img src="images/veticalposter1.jpg" className='heroimage hroimg2' alt="About Company" />
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <h3>About us</h3>
                            <p>We are a leading brass parts manufacturing company dedicated to delivering high-quality, precision-engineered components for a wide range of industries. With years of experience and a strong foundation in metal craftsmanship, our company has earned a reputation for reliability, durability, and innovation. From the selection of raw materials to the final finishing, every process is handled with utmost care to ensure superior quality and customer satisfaction.</p>
                            <br /><div className="about-details">
                                <h3>Our Specialization</h3>
                                <p>Our core specialization lies in manufacturing customized brass components such as brass electrical parts, sanitary fittings, automotive parts, gas fittings, inserts, terminals, and precision-turned parts. We cater to both domestic and international markets, providing products that meet global standards in terms of quality, finish, and performance. With modern machinery, skilled technicians, and a commitment to excellence, we ensure timely delivery and complete client satisfaction in every order.</p>
                            </div>
                            <button className="primary-button" style={{ marginTop: "3vh" }}>
                                <Link to="/about">
                                    Learn More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='aboutthefeatures'>
                <div className="aboutthefeaturesgrid">
                    <div className="aboutthefeaturesgridcards">
                        <h1 className="aboutthefeaturesgridheading">22+</h1>
                        <span>Years Experience</span>
                    </div>
                    <hr />
                    <div className="aboutthefeaturesgridcards">
                        <h1 className="aboutthefeaturesgridheading">100+</h1>
                        <span>Products Completed</span>
                    </div>
                    <hr />
                    <div className="aboutthefeaturesgridcards">
                        <h1 className="aboutthefeaturesgridheading">60+</h1>
                        <span>Satisfied Clients</span>
                    </div>
                </div>
                <div className="aboutthefeaturesflexcards2">
                    <div className='aboutthefeaturesflexcard atffcl'>
                        <div className="feature-icon" style={{ marginBottom: "1rem" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} color={"#000000"} fill={"none"} >
                                <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M21.011 14.0965C21.5329 13.9558 21.7939 13.8854 21.8969 13.7508C22 13.6163 22 13.3998 22 12.9669V11.0332C22 10.6003 22 10.3838 21.8969 10.2493C21.7938 10.1147 21.5329 10.0443 21.011 9.90358C19.0606 9.37759 17.8399 7.33851 18.3433 5.40087C18.4817 4.86799 18.5509 4.60156 18.4848 4.44529C18.4187 4.28902 18.2291 4.18134 17.8497 3.96596L16.125 2.98673C15.7528 2.77539 15.5667 2.66972 15.3997 2.69222C15.2326 2.71472 15.0442 2.90273 14.6672 3.27873C13.208 4.73448 10.7936 4.73442 9.33434 3.27864C8.95743 2.90263 8.76898 2.71463 8.60193 2.69212C8.43489 2.66962 8.24877 2.77529 7.87653 2.98663L6.15184 3.96587C5.77253 4.18123 5.58287 4.28891 5.51678 4.44515C5.45068 4.6014 5.51987 4.86787 5.65825 5.4008C6.16137 7.3385 4.93972 9.37763 2.98902 9.9036C2.46712 10.0443 2.20617 10.1147 2.10308 10.2492C2 10.3838 2 10.6003 2 11.0332V12.9669C2 13.3998 2 13.6163 2.10308 13.7508C2.20615 13.8854 2.46711 13.9558 2.98902 14.0965C4.9394 14.6225 6.16008 16.6616 5.65672 18.5992C5.51829 19.1321 5.44907 19.3985 5.51516 19.5548C5.58126 19.7111 5.77092 19.8188 6.15025 20.0341L7.87495 21.0134C8.24721 21.2247 8.43334 21.3304 8.6004 21.3079C8.76746 21.2854 8.95588 21.0973 9.33271 20.7213C10.7927 19.2644 13.2088 19.2643 14.6689 20.7212C15.0457 21.0973 15.2341 21.2853 15.4012 21.3078C15.5682 21.3303 15.7544 21.2246 16.1266 21.0133L17.8513 20.034C18.2307 19.8187 18.4204 19.711 18.4864 19.5547C18.5525 19.3984 18.4833 19.132 18.3448 18.5991C17.8412 16.6616 19.0609 14.6226 21.011 14.0965Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h2>Cutting-Edge Technology</h2>
                        <p style={{ color: "#000000", opacity: "0.5" }}>
                            We integrate cutting-edge technology into every step of our brass manufacturing process, ensuring precision and unmatched quality. Our advanced machinery meets the highest industry standards, exceeding customer expectations.
                        </p>

                        <Link to="/services" className='linkathomeforfeaturesokay'>
                            learn more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={35}
                                height={40}
                                fill="none"
                                style={{ color: "#9747FF" }}
                            >
                                <path
                                    d="M20.0001 11.9998L4.00012 11.9998"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div className='aboutthefeaturesflexcard atffcr'>
                        <div className="feature-icon" style={{ marginBottom: "1rem" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} color={"#000000"} fill={"none"} >
                                <path d="M22 6.75003H19.2111C18.61 6.75003 18.3094 6.75003 18.026 6.66421C17.7426 6.5784 17.4925 6.41168 16.9923 6.07823C16.2421 5.57806 15.3862 5.00748 14.961 4.87875C14.5359 4.75003 14.085 4.75003 13.1833 4.75003C11.9571 4.75003 11.1667 4.75003 10.6154 4.97839C10.0641 5.20675 9.63056 5.6403 8.76347 6.50739L8.00039 7.27047C7.80498 7.46588 7.70727 7.56359 7.64695 7.66005C7.42335 8.01764 7.44813 8.47708 7.70889 8.80854C7.77924 8.89796 7.88689 8.98459 8.10218 9.15785C8.89796 9.79827 10.0452 9.73435 10.7658 9.00945L12 7.76789H13L19 13.8036C19.5523 14.3592 19.5523 15.2599 19 15.8155C18.4477 16.3711 17.5523 16.3711 17 15.8155L16.5 15.3125M13.5 12.2947L16.5 15.3125M16.5 15.3125C17.0523 15.8681 17.0523 16.7689 16.5 17.3244C15.9477 17.88 15.0523 17.88 14.5 17.3244L13.5 16.3185M13.5 16.3185C14.0523 16.874 14.0523 17.7748 13.5 18.3304C12.9477 18.8859 12.0523 18.8859 11.5 18.3304L10 16.8214M13.5 16.3185L11.5 14.3185M9.5 16.3185L10 16.8214M10 16.8214C10.5523 17.377 10.5523 18.2778 10 18.8334C9.44772 19.3889 8.55229 19.3889 8 18.8334L5.17637 15.9509C4.59615 15.3586 4.30604 15.0625 3.93435 14.9062C3.56266 14.75 3.14808 14.75 2.31894 14.75H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 14.75H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M8.5 6.75003L2 6.75003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h2>Customer Commitment</h2>
                        <p style={{ color: "#000000", opacity: "0.5" }}>
                            Our commitment to customers is at the heart of everything we do. We prioritize quality, reliability, and timely delivery to meet your unique needs. By building long-term partnerships, we ensure every product exceeds expectations.
                        </p>
                        <Link to="/services" className='linkathomeforfeaturesokay'>
                            learn more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={35}
                                height={40}
                                fill="none"
                                style={{ color: "#9747FF" }}
                            >
                                <path
                                    d="M20.0001 11.9998L4.00012 11.9998"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <Products />

            <Testimonials2 />

            <div className='container' style={{ flexDirection: "column", gap: "0", marginTop: "4em" }}>
                <h2 className="section-title">Contact Us</h2>
                <p>
                    Have questions or need more information? Get in touch with us today.
                </p>
            </div>



            <Contactpage />


            <div className="whatareyoub">
                <div className="whatareyou">
                    <h2 style={{ fontSize: "2em" }}>Feel free to ask any questions. <br /> Contact us today!</h2>
                    <a href="#contact" className='whatareyoubtn'>Contact Us</a>
                </div>
            </div>

        </>
    );
};

export default Home;
