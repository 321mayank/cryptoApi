const express = require('express');

const zrxRouter = express.Router();

const { renderzrx } = require('../controller/zrx');

zrxRouter.get('/zrx', renderzrx)

module.exports = zrxRouter