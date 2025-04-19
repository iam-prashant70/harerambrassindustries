import React from 'react'

export default function Contactpage() {
    return (
        <>

            <section id="contact">


                <div className="container">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="contactformhere">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                            <form>
                                <input type="text" placeholder="Full Name" className="input-field" />
                                <input type="email" placeholder="Email Address" className="input-field" />
                                <input type="tel" placeholder="Phone Number" className="input-field" />
                                <input type="text" placeholder="Subject" className="input-field" />
                                <textarea placeholder="Your message here..." className="textarea-field"></textarea>
                                <button type="submit" className="btn-primary">Send Message</button>
                            </form>
                        </div>

                        <div className="">
                            <div className="contact-info">
                                <h3 className="">Contact Information</h3>
                                <div className="info-item"><i className="fa-solid fa-location-dot"></i> 123 Industrial Parkway, Tech City, CA 94043, United States</div>
                                <div className="info-item"><i className="fa-solid fa-phone"></i> +1 (800) 123-4567 | +1 (800) 987-6543</div>
                                <br /><div className="info-item"><i className="fa-solid fa-envelope"></i> info@industech.com | support@industech.com</div>
                                <div className="info-item"><i className="fa-solid fa-clock"></i> Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 1:00 PM</div>
                                
                                <div className="social-links">
                                    <a href="#" className="social-icon facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#" className="social-icon twitter"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#" className="social-icon youtube"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="#" className="social-icon linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <iframe
                                className="map-placeholder"
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58995.10720908078!2d70.04815354673605!3d22.459335385712897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s0%2C253%2FA%2C%20Phase%20-%202%2C%20GIDC%20Dared%20jamnagar%20-%20361004!5e0!3m2!1sen!2sin!4v1744709461875!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
