const express = require('express');

const zilRouter = express.Router();

const { renderzil } = require('../controller/zil');

zilRouter.get('/zil', renderzil)

module.exports = zilRouter