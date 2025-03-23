import React from "react";
import "../styles/AdminEvent.css";
import eventIcon from "../assets/events.png";
import organizerIcon from "../assets/organizers.png";
import reportIcon from "../assets/generate.png";
import logoutIcon from "../assets/logout.png";
import profilePic from "../assets/user.png";
import logoIcon from "../assets/logo.png";

const AddEvent = () => {
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
                        <img src={profilePic} alt="Admin Profile" />
                    </div>
                </div>

                {/* New Event Form */}
                <div className="new-event-form-container">
    <button className="new-event-btn">New Event</button>

    <form className="event-form">
        <label>Title:</label>
        <input type="text" placeholder="Event title" />

        <label>Date:</label>
        <input type="date" />

        <label>Description:</label>
        <input type="text" placeholder="Event description" />

        <label>Organizer:</label>
        <input type="text" placeholder="Organizer name" />

        <div className="form-buttons">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="add-btn">Add</button>
        </div>
    </form>
</div>

            </main>
        </div>
    );
};

export default AddEvent;
