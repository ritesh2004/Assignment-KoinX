// schedulers/marketDataScheduler.js
const cron = require('node-cron');
const fetchUpdateData = require('../services/fatchUpdateData');

const initializeScheduler = () => {
    // Schedule the task to run every 2 hours
    cron.schedule('0 */2 * * *', () => {
    console.log('Running market data update');
    fetchUpdateData();
    });

    console.log('Market data scheduler initialized');
}

module.exports = initializeScheduler;