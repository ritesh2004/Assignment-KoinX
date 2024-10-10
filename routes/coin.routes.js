const express = require('express');
const { getLatestData } = require('../controllers/coin.controllers');

// Coin Router
const coinRouter = express.Router();

// POST /stats
coinRouter.post('/stats', getLatestData);

module.exports = coinRouter;