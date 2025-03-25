import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminEvent.css"; // Assure-toi que ce fichier est correctement lié
import certificateIcon from "../assets/certificate.png"; // Icône pour la section des certificats
import eventIcon from "../assets/events.png"; // Icône pour la section des événements
import logoutIcon from "../assets/logout.png"; // Icône de déconnexion
import profilePic from "../assets/user.png"; // Photo de profil
import logoIcon from "../assets/logo.png"; // Icône de logo

const PARcertificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les certificats
    const fetchCertificates = async () => {
      const token = localStorage.getItem("token"); // Récupérer le token depuis le localStorage
      if (token) {
        try {
          const response = await axios.get("https://ton-api.com/certificates", {
            headers: { Authorization: `Bearer ${token}` }, // Ajoute le token dans les en-têtes
          });
          setCertificates(response.data); // Assigner les données récupérées à l'état
        } catch (error) {
          console.error("Erreur lors de la récupération des certificats:", error);
        }
      }
    };

    fetchCertificates(); // Appel de la fonction pour récupérer les certificats
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

        {/* Certificates List */}
        <section className="certificates-list">
          {certificates.length > 0 ? (
            certificates.map((cert, index) => (
              <div key={index} className="certificate-item">
                <span>{cert.name}</span> {/* Affichage du nom du certificat */}
                <button className="upload-btn">Upload</button> {/* Bouton pour télécharger le certificat */}
              </div>
            ))
          ) : (
            <p>No certificates available</p> // Message si aucun certificat n'est disponible
          )}
        </section>
      </main>
    </div>
  );
};

export default PARcertificates;
