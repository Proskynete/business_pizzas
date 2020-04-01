const express = require('express');
const punishedController = require('../controllers/punished.controller');
const routes = express.Router();

routes.get('/punished', punishedController.getAllPunished);
routes.post('/punished', punishedController.insertNewPunished);

module.exports = routes;
