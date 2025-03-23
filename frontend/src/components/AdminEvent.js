import React from "react";
import "../styles/AdminEvent.css"; // Ensure this file is correctly linked
import eventIcon from "../assets/events.png"; // Icon for event section
import organizerIcon from "../assets/organizers.png"; // Icon for organizers section
import reportIcon from "../assets/generate.png"; // Icon for Generate CR section
import logoutIcon from "../assets/logout.png"; // Logout icon
import profilePic from "../assets/user.png"; // Profile picture
import eventImage from "../assets/event.png"; // Illustration inside event card
import logoIcon from "../assets/logo.png"; // Illustration inside event card


const AdminEvent = () => {
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
                            <img src={organizerIcon} alt="Organizers" />
                            <span>Organizers</span>
                        </li>
                        <li>
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
                    <h2>📅 <span>Events</span></h2>
                    <div className="profile">
                        <span>S. Admin</span>
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
                        <button className="edit-btn">Edit</button>
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
                        <button className="edit-btn">Edit</button>
                    </div>

                    <button className="add-event-btn">Add Event</button>
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

export default AdminEvent;
