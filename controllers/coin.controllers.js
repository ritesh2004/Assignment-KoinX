const Btc = require('../models/btc.models');
const Eth = require('../models/ethereum.models');
const Matic = require('../models/matic.models');

const getLatestData = async (req, res) => {
    try {
        const { coin } = req.body;
        if (coin === 'bitcoin') {
            const btc = await Btc.find().sort({ createdAt: -1 }).limit(1);
            return res.json(btc);
        } else if (coin === 'ethereum') {
            const eth = await Eth.find().sort({ createdAt: -1 }).limit(1);
            return res.json(eth);
        } else if (coin === 'matic') {
            const matic = await Matic.find().sort({ createdAt: -1 }).limit(1);
            return res.json(matic);
        } else {
            return res.status(404).json({ error: 'Coin not found' });
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ error: 'Server error' });
    }
};














module.exports = {
    getLatestData
}