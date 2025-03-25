import React, { useState } from "react";
import axios from "axios"; // Importer Axios
import "../styles/AdminOrg.css";
import eventIcon from "../assets/events.png";
import organizerIcon from "../assets/organizers.png";
import reportIcon from "../assets/generate.png";
import logoutIcon from "../assets/logout.png";
import profilePic from "../assets/user.png";
import logoIcon from "../assets/logo.png";

const AddEvent = () => {
    const [eventData, setEventData] = useState({
        eventTitle: "",
        participantsFile: null
    });

    // Gérer le changement des champs du formulaire
    const handleInputChange = (event) => {
        const { name, value, type, files } = event.target;
        if (type === "file") {
            setEventData({
                ...eventData,
                [name]: files[0] // Stocke le fichier sélectionné
            });
        } else {
            setEventData({
                ...eventData,
                [name]: value
            });
        }
    };

    // Gérer l'envoi du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();

        // Crée un objet FormData pour envoyer le fichier avec les autres données
        const formData = new FormData();
        formData.append("eventTitle", eventData.eventTitle);
        formData.append("participants", eventData.participantsFile);

        // Récupérer le token depuis le localStorage
        const token = localStorage.getItem("token");

        if (token) {
            // Utilisation d'Axios pour envoyer les données à l'API
            axios.post("https://ton-api.com/add-event", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}` // Ajouter le token dans l'en-tête de la requête
                }
            })
                .then(response => {
                    console.log("Event added successfully:", response.data);
                    // Réinitialise les champs du formulaire après succès
                    setEventData({
                        eventTitle: "",
                        participantsFile: null
                    });
                })
                .catch(error => {
                    console.error("There was an error adding the event:", error);
                });
        } else {
            console.error("Token not found. Please log in again.");
        }
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

                    <form className="event-form" onSubmit={handleSubmit}>
                        <label>Event:</label>
                        <input
                            type="text"
                            name="eventTitle"
                            placeholder="Event title"
                            value={eventData.eventTitle}
                            onChange={handleInputChange}
                        />

                        <label>Participants :</label>
                        <input
                            type="file"
                            name="participantsFile"
                            onChange={handleInputChange}
                        />

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
