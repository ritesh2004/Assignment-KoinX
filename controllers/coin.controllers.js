const Btc = require('../models/btc.models');
const Eth = require('../models/ethereum.models');
const Matic = require('../models/matic.models');

const getLatestData = async (req, res) => {
    try {
        const { coin } = req.body;
        if (coin === 'bitcoin') {
            const btc = await Btc.find().sort({ createdAt: -1 }).limit(1);
            return res.json({
                price: btc[0].price,
                "24hChange": btc[0]["24hChange"],
                marketCap: btc[0].marketCap
            });
        } else if (coin === 'ethereum') {
            const eth = await Eth.find().sort({ createdAt: -1 }).limit(1);
            return res.json({
                price: eth[0].price,
                "24hChange": eth[0]["24hChange"],
                marketCap: eth[0].marketCap
            });
        } else if (coin === 'matic') {
            const matic = await Matic.find().sort({ createdAt: -1 }).limit(1);
            return res.json({
                price: matic[0].price,
                "24hChange": matic[0]["24hChange"],
                marketCap: matic[0].marketCap
            });
        } else {
            return res.status(404).json({ error: 'Coin not found' });
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ error: 'Server error' });
    }
};


const getDeviation = async (req, res) => {
    try {
        const { coin } = req.body;
        
        let Model;
        switch (coin.toLowerCase()) {
            case 'bitcoin':
                Model = Btc;
                break;
            case 'ethereum':
                Model = Eth;
                break;
            case 'matic':
                Model = Matic;
                break;
            default:
                return res.status(404).json({ error: 'Coin not found' });
        }

        // Fetch records
        const records = await Model.find().select('price');
        console.log(records);

        if (records.length === 0) {
            return res.status(404).json({ error: 'No data' });
        }

        // Extract prices
        const prices = records.map(record => record.price);
        console.log(prices);

        // Calculate mean
        const mean = (prices.reduce((sum, price) => sum + price, 0)) / prices.length;

        // Calculate sum of squared differences
        const squaredDifferencesSum = prices.reduce((sum, price) => {
            const difference = price - mean;
            return sum + (difference * difference);
        }, 0);

        // Calculate mean standard deviation
        const standardDeviation = Math.sqrt(squaredDifferencesSum / prices.length);

        return res.json({
            deviation: parseFloat(standardDeviation.toFixed(2))
        });

    } catch (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: 'Server error' });
    }
};


module.exports = {
    getLatestData,
    getDeviation
}