const express = require('express');

const nulsRouter = express.Router();

const { rendernuls } = require('../controller/nuls');

nulsRouter.get('/nuls', rendernuls)

module.exports = nulsRouter