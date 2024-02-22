const express = require('express');
const router = express.Router();    
const controller = require('../controlleur/controlleur');


//creation de la route pour tout afficher
router.get('/tous', controller.getAllTitles);
router.get('/:type', controller.getALLParType);
module.exports = router;
