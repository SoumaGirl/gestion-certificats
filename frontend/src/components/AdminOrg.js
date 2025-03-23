import React from "react";
import "../styles/AdminOrg.css"; // Fichier CSS spécifique
import organizerIcon from "../assets/organizers.png";
import eventIcon from "../assets/events.png";
import reportIcon from "../assets/generate.png";
import logoutIcon from "../assets/logout.png";
import profilePic from "../assets/user.png";
import logoIcon from "../assets/logo.png";
import org from "../assets/org.png";


const AdminOrg = () => {
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
                        <li className="active">
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
                <h2>
                  <img src={org} alt="Org" className="header-icon" /> 
                    <span>Organizers</span>
                </h2>
                    <div className="profile">
                        <span>S. Admin</span>
                        <img src={profilePic} alt="Admin Profile" />
                    </div>
                </div>

                {/* Organizers Form */}
                <div className="form-container">
                    <button className="add-btn">Add Organizer</button>
                    <form className="organizer-form">
                        <label>Full Name :</label>
                        <input type="text" />

                        <label>CNE :</label>
                        <input type="text" />

                        <label>Email :</label>
                        <input type="email" />

                        <div className="form-buttons">
                            <button className="cancel-btn">Cancel</button>
                            <button className="add-btn">Add</button>
                        </div>
                    </form>
                </div>
            </main>

            {/* Organizers List */}
            <aside className="organizers-list">
                <h3>👤 Organizers</h3>
                <ul>
                    <li>1- Ethan Carter</li>
                    <li>2- Sophia Reynolds</li>
                    <li>3- Lucas Bennett</li>
                    <li>4- Emma Harrison</li>
                    <li>5- Noah Mitchell</li>
                    <li>6- Ava Sullivan</li>
                    <li>7- Liam Richardson</li>
                    <li>8- Olivia Hayes</li>
                    <li>9- Mason Cooper</li>
                    <li>10- Isabella Scott</li>
                    <li>11- Benjamin Foster</li>
                    <li>12- Charlotte Evans</li>
                    <li>13- Alexander Brooks</li>
                    <li>14- Mia Thompson</li>
                </ul>
            </aside>
        </div>
    );
};

export default AdminOrg;
