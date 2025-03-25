import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "../styles/AdminGenerateCR.css";
import { downloadCertificate } from "../services/certificateService";
import eventIcon from "../assets/events.png"; 
import organizerIcon from "../assets/organizers.png"; 
import reportIcon from "../assets/generate.png"; 
import logoutIcon from "../assets/logout.png"; 
import profilePic from "../assets/user.png"; 
import logoIcon from "../assets/logo.png"; 
import download from "../assets/download.png"; 
import gen from "../assets/gen.png"; 

const AdminGenerateCR = () => {
    const [eventName, setEventName] = useState("");
    const [participantsFile, setParticipantsFile] = useState(null);

    const handleGenerate = (e) => {
        e.preventDefault();

        // Get the token from localStorage
        const token = localStorage.getItem("token");

        if (!token) {
            console.error("Token is missing. Please login again.");
            return;
        }

        // Create form data to send
        const formData = new FormData();
        formData.append("event", eventName);
        formData.append("participants", participantsFile);

        // Make the POST request to your backend API with the token in the Authorization header
        axios.post("https://api.example.com/generate-report", formData, {
            headers: {
                "Authorization": `Bearer ${token}` // Add token to request headers
            }
        })
            .then((response) => {
                console.log("Report Generated:", response.data);
                // Handle success (e.g., show a success message)
            })
            .catch((error) => {
                console.error("There was an error generating the report:", error);
                // Handle error (e.g., show an error message)
            });
    };

const handleDownload = () => {
    if (!eventName) {
        alert("Veuillez entrer un nom d'événement !");
        return;
    }
    downloadCertificate(eventName); // Appelle la fonction avec l'ID de l'événement
};
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
                    <form className="generate-form" onSubmit={handleGenerate}>
                        <label>Event:</label>
                        <input 
                            type="text" 
                            placeholder="Enter event name" 
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)} 
                        />

                        <label>Participants:</label>
                        <input 
                            type="file" 
                            onChange={(e) => setParticipantsFile(e.target.files[0])} 
                        />

                        {/* Buttons */}
                        <div className="form-buttons">
                            <button className="cancel-btn">Cancel</button>
                            <button type="submit" className="generate-btn">Generate</button>
                        </div>
                    </form>
                </div>

                {/* Download & Publish Buttons */}
                <div className="action-buttons">
                   <button className="download-btn" onClick={handleDownload}>
                       <img src={download} alt="download" className="button-icon" />
                       Download Certificate
                   </button>
                </div>
            </main>
        </div>
    );
};

export default AdminGenerateCR;
