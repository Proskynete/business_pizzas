const express = require('express');
const punishedController = require('../controllers/punished.controller');
const routes = express.Router();

routes.get('/punished', punishedController.getAllPunished);
routes.post('/punished', punishedController.insertNewPunished);
routes.delete('/punished', punishedController.removeAll);

module.exports = routes;
