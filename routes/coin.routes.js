const express = require('express');
const { getLatestData, getDeviation } = require('../controllers/coin.controllers');

// Coin Router
const coinRouter = express.Router();

// POST: /stats
coinRouter.post('/stats', getLatestData);

// POST: /deviation
coinRouter.post('/deviation', getDeviation);

module.exports = coinRouter;