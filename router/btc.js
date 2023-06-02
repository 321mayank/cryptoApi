const express = require('express');

const btcRouter = express.Router();

const { renderBtc } = require('../controller/btc');

btcRouter.get('/btc', renderBtc)

module.exports = btcRouter