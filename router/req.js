const express = require('express');

const reqRouter = express.Router();

const { renderreq } = require('../controller/req');

reqRouter.get('/req', renderreq)

module.exports = reqRouter