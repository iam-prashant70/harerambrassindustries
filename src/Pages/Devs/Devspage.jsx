import React from 'react';
import { motion } from 'framer-motion';
import './Devspage.css';
import ProfileCard from './Card';

const DevsPage = () => {
    const developers = [
        {
            name: 'Ratnesh Kumawat',
            role: 'Ui/Ux Desginer | Developer',
            image: 'images/ratu2.jpeg',
            social: 'https://www.linkedin.com/in/ratnesh-kumawat-6301b425b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            socialnames: '_ratnesh.design'
        },
        {
            name: 'Prashant Maghodiya',
            role: 'Backend Developer',
            image: 'images/papu2.jpg',
            social: 'https://www.linkedin.com/in/prashant-maghodiya-690528343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            socialnames: 'iam._.prashant'
        }
    ];

    return (

        <div className="devs-container">
            <div className="background-animation">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
            </div>
            <div className="overlayreturnsactive">
                <img src="images/logofull.png" alt="loading" />
            </div>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="devs-title"
            >
                Meet the Developers
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="devs-description"
            >
                Passionate creators bringing digital experiences to life. We code, design, and deliver with purpose.
            </motion.p>

            <motion.div
                className="devs-grid"
            >
                {developers.map((dev, i) => (
                    // <div
                    //     key={i}
                    //     className="devs-card fade-up">
                    //     <div style={{ display: "flex", alignItems: "center", gap: "2em" }}>
                    //         <div className="devs-avatar">
                    //             <img src={dev.image} alt={dev.name} />
                    //         </div>
                    //         <div style={{ textAlign: "start" }} >
                    //             <h2 className="devs-name">{dev.name}</h2>
                    //             <p className="devs-role">{dev.role}</p>
                    //         </div>

                    //     </div >
                    //     <div style={{ height : "50px", display: "flex", gap: "1em", alignItems: "center" }}>
                    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"} >
                    //             <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round"></path>
                    //             <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#ffffff" strokeWidth="1.5"></path>
                    //             <path d="M17.5078 6.5L17.4988 6.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    //         </svg>
                    //         <p className="devs-role">{dev.socialnames}</p>
                    //     </div>
                    //     <br />
                    //     <a href={dev.social} target="_blank" rel="noopener noreferrer" className="devs-social">
                    //         View Profile
                    //     </a>
                    // </div>
                    <ProfileCard key={i} name={dev.name} img={dev.image} link={dev.social} role={dev.role} />
                ))}
            </motion.div>
        </div>
    );
};

export default DevsPage;