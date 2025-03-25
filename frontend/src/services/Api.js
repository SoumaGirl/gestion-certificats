import axios from 'axios';

// Créer une instance d'Axios avec des configurations par défaut
const api = axios.create({
  baseURL: 'http://localhost:3001', // Remplace par l'URL de ton API
  timeout: 10000,  // Timeout de 10 secondes pour les requêtes
  headers: {
    'Content-Type': 'application/json',
  }
});

// Fonction pour mettre à jour le token d'authentification (si nécessaire)
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers['Authorization'];
  }
};

// Exemple de requête GET avec gestion d'erreur améliorée
export const getData = async () => {
  try {
    const response = await api.get('/data-endpoint');  // Remplace par ton endpoint API
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Exemple de requête POST avec gestion d'erreur améliorée
export const postData = async (data) => {
  try {
    const response = await api.post('/submit-endpoint', data);  // Remplace par ton endpoint API
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Fonction pour gérer les erreurs de manière détaillée
const handleError = (error) => {
  if (error.response) {
    // La réponse a été reçue mais elle contient une erreur
    console.error('Erreur HTTP:', error.response.status);
    console.error('Détails:', error.response.data);
  } else if (error.request) {
    // La requête a été faite mais aucune réponse n'a été reçue
    console.error('Erreur réseau ou aucune réponse:', error.request);
  } else {
    // Autre type d'erreur
    console.error('Erreur inconnue:', error.message);
  }
};

// Export de l'instance pour l'utiliser partout dans ton app
export default api;
