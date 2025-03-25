import React, { useEffect, useState } from "react";
import axios from "axios"; // Importer Axios
import "../styles/AdminOrg.css"; // Fichier CSS spécifique
import organizerIcon from "../assets/organizers.png";
import eventIcon from "../assets/events.png";
import reportIcon from "../assets/generate.png";
import logoutIcon from "../assets/logout.png";
import profilePic from "../assets/user.png";
import logoIcon from "../assets/logo.png";
import org from "../assets/org.png";

const AdminOrg = () => {
    const [organizers, setOrganizers] = useState([]); // Pour stocker les organisateurs
    const [newOrganizer, setNewOrganizer] = useState({
        fullName: "",
        cne: "",
        email: ""
    });

    // Fonction pour récupérer les organisateurs avec le token
    useEffect(() => {
        const token = localStorage.getItem("token"); // Récupérer le token depuis le localStorage
        if (token) {
            axios.get("https://ton-api.com/organizers", {
                headers: {
                    "Authorization": `Bearer ${token}` // Ajouter le token dans l'en-tête
                }
            })
                .then(response => {
                    setOrganizers(response.data); // Mettre à jour l'état avec la liste des organisateurs
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération des organisateurs : ", error);
                });
        } else {
            console.error("Token non trouvé. Veuillez vous reconnecter.");
        }
    }, []);

    // Fonction pour gérer l'ajout d'un nouvel organisateur
    const handleAddOrganizer = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token"); // Récupérer le token depuis le localStorage
        if (token) {
            axios.post("https://ton-api.com/organizers", newOrganizer, {
                headers: {
                    "Authorization": `Bearer ${token}` // Ajouter le token dans l'en-tête
                }
            })
                .then(response => {
                    setOrganizers([...organizers, response.data]); // Ajouter l'organisateur à la liste
                    setNewOrganizer({ fullName: "", cne: "", email: "" }); // Réinitialiser le formulaire
                })
                .catch(error => {
                    console.error("Erreur lors de l'ajout de l'organisateur : ", error);
                });
        } else {
            console.error("Token non trouvé. Veuillez vous reconnecter.");
        }
    };

    // Gérer les changements dans le formulaire
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewOrganizer({
            ...newOrganizer,
            [name]: value
        });
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
                    <button className="add-btn" onClick={() => {}}>Add Organizer</button>
                    <form className="organizer-form" onSubmit={handleAddOrganizer}>
                        <label>Full Name :</label>
                        <input
                            type="text"
                            name="fullName"
                            value={newOrganizer.fullName}
                            onChange={handleInputChange}
                        />

                        <label>CNE :</label>
                        <input
                            type="text"
                            name="cne"
                            value={newOrganizer.cne}
                            onChange={handleInputChange}
                        />

                        <label>Email :</label>
                        <input
                            type="email"
                            name="email"
                            value={newOrganizer.email}
                            onChange={handleInputChange}
                        />

                        <div className="form-buttons">
                            <button className="cancel-btn">Cancel</button>
                            <button className="add-btn" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </main>

            {/* Organizers List */}
            <aside className="organizers-list">
                <h3>👤 Organizers</h3>
                <ul>
                    {organizers.map((organizer, index) => (
                        <li key={index}>{organizer.fullName}</li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default AdminOrg;
