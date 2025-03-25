import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminEvent.css"; // Assure-toi que ce fichier est correctement lié
import eventIcon from "../assets/events.png"; // Icône pour la section des événements
import certificateIcon from "../assets/certificate.png"; // Icône pour la section des certificats
import logoutIcon from "../assets/logout.png"; // Icône de déconnexion
import profilePic from "../assets/user.png"; // Photo de profil
import eventImage from "../assets/event.png"; // Illustration de l'événement
import logoIcon from "../assets/logo.png"; // Icône de logo

const ORGdashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les événements
    const fetchEvents = async () => {
      const token = localStorage.getItem("token"); // Récupérer le token depuis le localStorage
      if (token) {
        try {
          const response = await axios.get("https://ton-api.com/events", {
            headers: { Authorization: `Bearer ${token}` }, // Ajouter le token dans les en-têtes
          });
          setEvents(response.data); // Assigner les événements récupérés à l'état
        } catch (error) {
          console.error("Erreur lors de la récupération des événements:", error);
        }
      }
    };

    fetchEvents(); // Appel de la fonction pour récupérer les événements
  }, []); // Cette fonction sera appelée au montage du composant

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

        {/* Events List */}
        <div className="events-container">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div key={index} className="event-card">
                <img
                  src={eventImage} // Utilise une image spécifique si nécessaire
                  alt={event.name}
                  className="event-img"
                />
                <div className="event-info">
                  <h4>{event.name}</h4>
                  <p className="event-date">{event.date}</p>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No events available</p> // Message si aucun événement n'est disponible
          )}
        </div>
      </main>

      {/* Calendar */}
      <div className="calendar">
        <h2>CALENDAR 2025</h2>
        <div className="months">
          {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(
            (month, index) => (
              <span key={index} className={month === "April" || month === "March" ? "highlight" : ""}>
                {month.toLowerCase()}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ORGdashboard;
