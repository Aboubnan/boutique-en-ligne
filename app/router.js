import express from 'express';

import { mainController } from './controllers/main-controller.js';

const router = express.Router();

// page d'acceuil
router.get('/', mainController.homePage);
router.get('/clothes', mainController.clothesPage);
router.get('/accessory', mainController.accessoryPage);
router.get('/shoe', mainController.shoePage);
router.get('/contact', mainController.contactPage);
router.get('/cart', mainController.cartPage);


export default router;