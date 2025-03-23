import React from "react";
import "../styles/AdminGenerateCR.css"; 
import eventIcon from "../assets/events.png"; 
import organizerIcon from "../assets/organizers.png"; 
import reportIcon from "../assets/generate.png"; 
import logoutIcon from "../assets/logout.png"; 
import profilePic from "../assets/user.png"; 
import logoIcon from "../assets/logo.png"; 
import download from "../assets/download.png"; // Icon for Download Button
import gen from "../assets/gen.png"; 


const AdminGenerateCR = () => {
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
                        <li>
                            <img src={eventIcon} alt="Events" />
                            <span>Events</span>
                        </li>
                        <li>
                            <img src={organizerIcon} alt="Organizers" />
                            <span>Organizers</span>
                        </li>
                        <li className="active">
                            <img src={reportIcon} alt="Generate CR" />
                            <span>Generate CR</span>
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
                    <h2>
                        <img src={gen} alt="gen" className="header-icon" />
                        <span>Generate CR</span>
                    </h2>
                    <div className="profile">
                        <span>S. Admin</span>
                        <img src={profilePic} alt="Admin Profile" />
                    </div>
                </div>

                {/* Form Section */}
                <div className="form-container">

                    <form className="generate-form">
                        <label>Event:</label>
                        <input type="text" placeholder="Enter event name" />

                        <label>Participants :</label>
                        <input type="file" />

                        {/* Buttons */}
                        <div className="form-buttons">
                            <button className="cancel-btn">Cancel</button>
                            <button className="generate-btn">Generate</button>
                        </div>
                    </form>
                </div>

                {/* Download & Publish Buttons */}
                <div className="action-buttons">
                    <button className="download-btn">
                        <img src={download} alt="download" className="button-icon" />
                        Download Certificate
                    </button>
                    <button className="publish-btn">Publish Certificates</button>
                </div>
            </main>
        </div>
    );
};

export default AdminGenerateCR;
