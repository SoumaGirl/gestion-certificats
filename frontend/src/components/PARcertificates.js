import React from "react";
import "../styles/AdminEvent.css";
import eventIcon from "../assets/events.png";
import certificateIcon from "../assets/certificate.png";
import logoutIcon from "../assets/logout.png";
import profilePic from "../assets/user.png";
import logoIcon from "../assets/logo.png";
import { FaCertificate, FaUpload } from "react-icons/fa";

const PARcertificates = () => {
  const certificates = ["Marketing Digital", "Machine Learning", "Artificial Intelligence"];

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-container">
          <img src={logoIcon} alt="logo" className="logo-icon" />
          <span className="logo-text">MYCERTS</span>
        </div>
        <nav>
          <ul>
            <li className="active">
              <img src={eventIcon} alt="Events" />
              <span>Events</span>
            </li>
            <li>
              <img src={certificateIcon} alt="Certificates" />
              <span>MY Certificates</span>
            </li>
          </ul>
        </nav>
        <button className="logout-btn">
          <img src={logoutIcon} alt="Log Out" />
          <span>Log Out</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="content">
        {/* Header */}
        <div className="header">
          <h2>📅 <span>Events</span></h2>
          <div className="profile">
            <span>S. Ahmed</span>
            <img src={profilePic} alt="Admin Profile" />
          </div>
        </div>

        {/* Certificates List */}
        <section className="certificates-list">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-item">
              <FaCertificate className="cert-icon" />
              <span>{cert}</span>
              <button className="upload-btn">
                <FaUpload /> Upload
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default PARcertificates;
