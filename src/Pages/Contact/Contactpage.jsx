import React, { useState, useRef } from 'react'
import axios from 'axios';

export default function Contactpage() {

    const [uname, setUname] = useState('');
    const [uemail, setUemail] = useState('');
    const [usub, setUsub] = useState('');
    const [umsg, setUmsg] = useState('');



    // const form = useRef();ref={form}

    const sendEmail = async (e) => {
        e.preventDefault();
        const serviceid = import.meta.env.VITE_SERVICE_ID;
        const templateid = import.meta.env.VITE_TEMPLATE_ID;
        const publicid = import.meta.env.VITE_PUBLIC_ID;

        const data = {
            service_id: serviceid,
            template_id: templateid,
            user_id: publicid,
            template_params: {
                from_name: uname,
                from_email: uemail,
                from_sub: usub,
                to_name: 'Hareram brass',
                message: umsg,
            }
        };

        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setUname('');
            setUemail('');
            setUmsg('');
            setUsub('');
        } catch (error) {
            console.log('Error sending email:', error);
        }
    };

    return (
        <>

            <section id="contact">
                <div className="containeronhomenewone">
                    <div className="contactformhere">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                        <form onSubmit={sendEmail}>
                            <input type="text" placeholder="Full Name" className="input-field"
                                value={uname} onChange={(e) => setUname(e.target.value)} />
                            
                            <input type="text" placeholder="Subject" className="input-field"
                                value={usub} onChange={(e) => setUsub(e.target.value)} />
                            
                            <input type="email" placeholder="Email Address" className="input-field"
                                value={uemail} onChange={(e) => setUemail(e.target.value)} />

                            <textarea placeholder="Your message here..." className="textarea-field"
                                value={umsg} onChange={(e) => setUmsg(e.target.value)} ></textarea>

                            <button type="submit" className="btn-primary">Send Message</button>
                        </form>
                    </div>

                    <div className="contactu_infoi">
                        <div className="contact-info">
                            <h3 className="">Contact Information</h3>
                            <div className="info-item">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ac25eb"} fill={"none"} >
                                    <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M18.2222 17C19.6167 18.9885 20.2838 20.0475 19.8865 20.8999C19.8466 20.9854 19.7999 21.0679 19.7469 21.1467C19.1724 22 17.6875 22 14.7178 22H9.28223C6.31251 22 4.82765 22 4.25311 21.1467C4.20005 21.0679 4.15339 20.9854 4.11355 20.8999C3.71619 20.0475 4.38326 18.9885 5.77778 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                253/A, Phase-2, GIDC Dared Jamnagar-361004 , Gujarat
                            </div>
                            <div className="info-item">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ac25eb"} fill={"none"} >
                                    <path d="M4 18.6458V8.05426C4 5.20025 4 3.77325 4.87868 2.88663C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.88663C20 3.77325 20 5.20025 20 8.05426V18.6458C20 20.1575 20 20.9133 19.538 21.2108C18.7831 21.6971 17.6161 20.6774 17.0291 20.3073C16.5441 20.0014 16.3017 19.8485 16.0325 19.8397C15.7417 19.8301 15.4949 19.9768 14.9709 20.3073L13.06 21.5124C12.5445 21.8374 12.2868 22 12 22C11.7132 22 11.4555 21.8374 10.94 21.5124L9.02913 20.3073C8.54415 20.0014 8.30166 19.8485 8.03253 19.8397C7.74172 19.8301 7.49493 19.9768 6.97087 20.3073C6.38395 20.6774 5.21687 21.6971 4.46195 21.2108C4 20.9133 4 20.1575 4 18.6458Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11 11H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 7L8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                GST No.24AZTPM1077F1Z6
                            </div>
                            <div className="info-item">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ac25eb"} fill={"none"} >
                                    <path d="M9.1585 5.71223L8.75584 4.80625C8.49256 4.21388 8.36092 3.91768 8.16405 3.69101C7.91732 3.40694 7.59571 3.19794 7.23592 3.08785C6.94883 3 6.6247 3 5.97645 3C5.02815 3 4.554 3 4.15597 3.18229C3.68711 3.39702 3.26368 3.86328 3.09497 4.3506C2.95175 4.76429 2.99278 5.18943 3.07482 6.0397C3.94815 15.0902 8.91006 20.0521 17.9605 20.9254C18.8108 21.0075 19.236 21.0485 19.6496 20.9053C20.137 20.7366 20.6032 20.3131 20.818 19.8443C21.0002 19.4462 21.0002 18.9721 21.0002 18.0238C21.0002 17.3755 21.0002 17.0514 20.9124 16.7643C20.8023 16.4045 20.5933 16.0829 20.3092 15.8362C20.0826 15.6393 19.7864 15.5077 19.194 15.2444L18.288 14.8417C17.6465 14.5566 17.3257 14.4141 16.9998 14.3831C16.6878 14.3534 16.3733 14.3972 16.0813 14.5109C15.7762 14.6297 15.5066 14.8544 14.9672 15.3038C14.4304 15.7512 14.162 15.9749 13.834 16.0947C13.5432 16.2009 13.1588 16.2403 12.8526 16.1951C12.5071 16.1442 12.2426 16.0029 11.7135 15.7201C10.0675 14.8405 9.15977 13.9328 8.28011 12.2867C7.99738 11.7577 7.85602 11.4931 7.80511 11.1477C7.75998 10.8414 7.79932 10.457 7.90554 10.1663C8.02536 9.83828 8.24905 9.56986 8.69643 9.033C9.14586 8.49368 9.37058 8.22402 9.48939 7.91891C9.60309 7.62694 9.64686 7.3124 9.61719 7.00048C9.58618 6.67452 9.44362 6.35376 9.1585 5.71223Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                +919712580007 | +919313094348
                            </div>
                            <div className="info-item">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ac25eb"} fill={"none"}>
                                    <path d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.01576 13.4756C2.08114 16.5411 2.11382 18.0739 3.24495 19.2093C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.755 19.2093C21.8862 18.0739 21.9189 16.5411 21.9842 13.4756C22.0053 12.4899 22.0053 11.51 21.9842 10.5244C21.9189 7.45883 21.8862 5.92606 20.755 4.79063C19.6239 3.6552 18.0497 3.61565 14.9012 3.53654C12.9607 3.48778 11.0393 3.48778 9.09882 3.53653C5.95033 3.61563 4.37608 3.65518 3.24495 4.79062C2.11382 5.92605 2.08113 7.45882 2.01576 10.5243C1.99474 11.51 1.99474 12.4899 2.01576 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                                harerambrassindustries03@gmail.com
                            </div>
                            <div className="info-item">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ac25eb"} fill={"none"}>
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                Sat - Thu : 8:00 AM - 8:00 PM
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
            </section>
        </>
    )
}
