import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importation d'Axios
import "../styles/login.css";
import api from "../services/Api"; // Importation correcte de l'instance d'Axios
import loginPic from "../assets/login-pic.png"; // Assure-toi que l'image est bien stockée
import { setAuthToken } from "../services/Api"; // Correction du chemin

const Login = () => {
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState(""); // Pour afficher les erreurs d'authentification
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);

        try {
            // Envoi des données de connexion à l'API avec Axios
            const response = await axios.post('http://localhost:3001/login', formData);

            if (response.data.success) {
                // Si la connexion est réussie, on récupère le token et on le stocke
                const token = response.data.token;
                const role = response.data.role; // Récupérer le rôle de l'utilisateur (admin, organizer, participant)
                localStorage.setItem("token", token); // Stocke le token dans localStorage
                localStorage.setItem("role", role);  // Stocke le rôle dans localStorage
                setAuthToken(token); // Met à jour l'authentification avec le token

                // Redirection en fonction du rôle de l'utilisateur
                if (role === "admin") {
                    navigate("/adminEvent");
                } else if (role === "organizer") {
                    navigate("/ORGdashboard");
                } else if (role === "participant") {
                    navigate("/PARdashboard");
                } else {
                    setErrorMessage("Rôle inconnu. Veuillez contacter l'administrateur.");
                }
            } else {
                // Si la connexion échoue, on affiche un message d'erreur
                setErrorMessage("Identifiants incorrects. Veuillez réessayer.");
            }
        } catch (error) {
            // Gérer les erreurs de connexion
            console.error("Erreur lors de la connexion", error);
            setErrorMessage("Une erreur s'est produite. Veuillez réessayer plus tard.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <h1 className="logo">MYCERTS</h1>
                <img src={loginPic} alt="Login Illustration" className="login-image" />
                <p className="slogan" style={{ fontStyle: "italic" }}>because every achievement matters.</p>
            </div>
            <div className="login-right">
                <h1>Login</h1>
                <p>Welcome Back! Please Login To Your Account.</p>

                {/* Affichage du message d'erreur si la connexion échoue */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <form onSubmit={handleSubmit}>
                    <label>Full Name :</label>
                    <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                    <label>Email :</label>
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <label>Password :</label>
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
