import React from "react";
import "../styles/AdminOrg.css";
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
                        <li >
                            <img src={eventIcon} alt="Events" />
                            <span>My Events</span>
                        </li>
                        <li className="active">
                            <img src={organizerIcon} alt="Organizers" />
                            <span>Participants</span>
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
                    <h2>📅 <span>My Events</span></h2>
                    <div className="profile">
                        <span>ORG. Amine</span>
                        <img src={profilePic} alt="Admin Profile" />
                    </div>
                </div>

                {/* New Event Form */}
                <div className="new-event-form-container">
    <button className="new-event-btn">Add Participants</button>

    <form className="event-form">
        <label>Event:</label>
        <input type="text" placeholder="Event title" />

        <label>Participants :</label>
        <input type="file" />

      
        <div className="form-buttons">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="add-btn">Submit</button>
        </div>
    </form>
</div>

            </main>
        </div>
    );
};

export default AddEvent;
