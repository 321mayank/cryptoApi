const express = require('express');

const batRouter = express.Router();

const { renderBat } = require('../controller/bat');

batRouter.get('/bat', renderBat)

module.exports = batRouter