const express = require('express');

const trxRouter = express.Router();

const { rendertrx } = require('../controller/trx');

trxRouter.get('/trx', rendertrx)

module.exports = trxRouter