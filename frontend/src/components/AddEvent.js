import React, { useState } from "react";
import axios from "axios"; // Importation d'Axios
import "../styles/AdminEvent.css";
import eventIcon from "../assets/events.png";
import organizerIcon from "../assets/organizers.png";
import reportIcon from "../assets/generate.png";
import logoutIcon from "../assets/logout.png";
import profilePic from "../assets/user.png";
import logoIcon from "../assets/logo.png";

const AddEvent = () => {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        description: "",
        organizer: "",
    });

    const [errorMessage, setErrorMessage] = useState(""); // Pour les erreurs

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Récupérer le token depuis le localStorage
        const token = localStorage.getItem("AdminEventToken");

        if (!token) {
            console.error("Token is missing. Please login again.");
            setErrorMessage("Token manquant. Veuillez vous reconnecter.");
            return;
        }

        try {
            // Envoi des données de l'événement à l'API avec le token dans l'en-tête Authorization
            const response = await axios.post('http://localhost:3001/events', formData, {
                headers: {
                    "Authorization": `Bearer ${token}` // Ajout du token à l'en-tête
                }
            });

            if (response.data.success) {
                // Si l'ajout est réussi, tu peux rediriger ou notifier l'utilisateur
                alert("Event ajouté avec succès !");
            } else {
                setErrorMessage("Erreur lors de l'ajout de l'événement");
            }
        } catch (error) {
            console.error("Erreur API", error);
            setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
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

                    {/* Formulaire d'ajout d'événement */}
                    <form className="event-form" onSubmit={handleSubmit}>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Event title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />

                        <label>Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />

                        <label>Description:</label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Event description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />

                        <label>Organizer:</label>
                        <input
                            type="text"
                            name="organizer"
                            placeholder="Organizer name"
                            value={formData.organizer}
                            onChange={handleChange}
                            required
                        />

                        {/* Affichage des erreurs */}
                        {errorMessage && <div className="error-message">{errorMessage}</div>}

                        <div className="form-buttons">
                            <button type="button" className="cancel-btn">
                                Cancel
                            </button>
                            <button type="submit" className="add-btn">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AddEvent;
