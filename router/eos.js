const express = require('express');

const eosRouter = express.Router();

const { renderEos } = require('../controller/eos');

eosRouter.get('/eos', renderEos)

module.exports = eosRouter