import axios from "axios";

const API_URL = "https://api.example.com"; // Remplace avec ton URL backend

export const downloadCertificate = async (eventId) => {
    try {
        const response = await axios.get(`${API_URL}/certificates/download/${eventId}`, {
            responseType: "blob", // Important pour télécharger un fichier
        });

        // Création d'un lien pour le téléchargement
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `certificate_${eventId}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("Erreur lors du téléchargement :", error);
    }
};
