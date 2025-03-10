const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Import des routes
const userRoutes = require('./app/routes/userRoutes');


// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // Pour analyser les requêtes JSON
app.use(cors()); // Pour permettre les requêtes cross-origin


// Connexion à MongoDB
mongoose.set('strictQuery', false); // ou true selon ton besoin
mongoose.connect('mongodb://localhost:27017/yeardb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connecté à MongoDB"))
  .catch(err => console.error("Erreur de connexion à MongoDB:", err));

// Définition des routes
app.use('/api/auth', userRoutes); // Routes pour l'authentification
// Démarrage du serveur
const PORT = process.env.PORT || 5030;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur le port ${PORT}`));
