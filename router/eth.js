const express = require('express');

const ethRouter = express.Router();

const { rendereth } = require('../controller/eth');

ethRouter.get('/eth', rendereth)

module.exports = ethRouter