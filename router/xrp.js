const express = require('express');

const xrpRouter = express.Router();

const { renderXrp } = require('../controller/xrp');

xrpRouter.get('/xrp', renderXrp)

module.exports = xrpRouter