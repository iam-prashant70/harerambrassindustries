import React from "react";
import "./profilecard.css";
export default function ProfileCard({name,img,link,role}) {
  return (

    <div className="card-container" style={{height : "300px"}}>
      <div className="image-wrapper">
        <div className="bg-img-container">
          <img src="/images/futurecity.jpeg" alt="Background" className="bg-img" />
        </div>

        <div className="pic-header">
          <div className="profile-pic">
            <img src={img} alt="Profile" />
          </div>
          {/* <div className="company-tag">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
              <circle cx="15" cy="12" r="3"  strokeWidth="1.5" strokeLinejoin="round"></circle>
              <path d="M9 21C10.6569 21 12 19.6569 12 18V15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z"  strokeWidth="1.5" strokeLinejoin="round"></path>
              <path d="M12 9V15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H12Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M12 3V9H9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M12 3V9H15C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span>Figma</span>
          </div> */}
        </div>

      </div>

      <div className="card-content">
        <div className="share-prof">
          <div className="hedpic">

            <h2>{name}</h2>
            <span className="role">{role}</span>
          </div>
          <a href="https://www.linkedin.com/in/ratnesh-kumawat-6301b425b/" target="_blank" className="shareprofile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26} color={"#000000"} fill={"none"}>
              <path d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z" stroke="#000000ff" strokeWidth="1.7" />
              <path d="M11.5 12.5L15 9" stroke="#000000ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <a href={link} target="_blank" className="cta-button" style={{marginTop : "10px"}}>Get In Touch</a>
    </div>
  );
}