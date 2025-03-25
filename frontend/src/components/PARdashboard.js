import React from "react";
import "../styles/AdminEvent.css"; // Ensure this file is correctly linked
import eventIcon from "../assets/events.png"; // Icon for event section
import certificateIcon from "../assets/certificate.png"; // Icon for organizers section
import logoutIcon from "../assets/logout.png"; // Logout icon
import profilePic from "../assets/user.png"; // Profile picture
import eventImage from "../assets/event.png"; // Illustration inside event card
import logoIcon from "../assets/logo.png"; // Illustration inside event card


const PARdashboard = () => {
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
                            <img src={certificateIcon} alt="certificate" />
                            <span>MY Certificates </span>
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
                        {/* <p>Prof</p> */}
                        <img src={profilePic} alt="Admin Profile" />
                    </div>
                </div>

                {/* Events List */}
                <div className="events-container">
                    <div className="event-card">
                        <img src={eventImage} alt="Marketing Digital" className="event-img" />
                        <div className="event-info">
                            <h4>Marketing Digital</h4>
                            <p className="event-date">March 2025</p>
                            <p className="event-description">
                                Discover essential digital marketing strategies to effectively promote a brand,
increase its online presence.
                            </p>
                        </div>
                    </div>

                    <div className="event-card">
                        <img src={eventImage} alt="Machine Learning" className="event-img" />
                        <div className="event-info">
                            <h4>Machine Learning</h4>
                            <p className="event-date">April 2025</p>
                            <p className="event-description">
                                Get started with artificial intelligence and learn how to build effective predictive models.
                            </p>
                        </div>
                    </div>

                </div>
            </main>

            {/* Calendar */}
            <div className="calendar">
                <h2>CALENDAR 2025</h2>
                <div className="months">
                    {["January",
                     "February",
                      "March",
                       "April", 
                       "May",
                        "June",
                      "July",
                       "August", 
                       "September", 
                       "October",
                        "November",
                         "December"]
                      .map((month, index) => (
                        <span key={index} className={month === "April" || month === "March" ? "highlight" : ""} >
                            {month.toLowerCase()}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PARdashboard;
