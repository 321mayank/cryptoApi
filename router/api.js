const express = require('express');

const apiRouter = express.Router();

const { fetchTickerData } = require('../controller/api');

apiRouter.get('/fetch', fetchTickerData)

module.exports = apiRouter
