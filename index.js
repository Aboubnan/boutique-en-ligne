// Importer le module Express
import express from 'express';

import 'dotenv/config';
console.log(process.env.PORT);

import router from './app/router.js';

// Créer une instance de l'application Express
const app = express();

// configuration de ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');

// définition du dossier de fichiers statique
app.use(express.static('./assets'));

app.use(router)

// Lancer le serveur et écouter sur le port défini
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});