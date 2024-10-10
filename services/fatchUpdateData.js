const mongoose = require('mongoose');
const Btc = require('../models/btc.models');
const Eth = require('../models/ethereum.models');
const Matic = require('../models/matic.models');
const fetchData = require('../utils/fetchData');

const fatchUpdateData = async () => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        // Fetch the coin data
        const data = await fetchData();
        const btcData = data.bitcoin;
        const ethData = data.ethereum;
        const maticData = data['matic-network'];
    
        // Update the BTC data
        await Btc.create([{
            price : btcData.usd,
            "24hChange" : btcData.usd_24h_change,
            marketCap : btcData.usd_market_cap
        }], { session });
        // Update the Ethereum data
        await Eth.create([{
            price : ethData.usd,
            "24hChange" : ethData.usd_24h_change,
            marketCap : ethData.usd_market_cap
        }], { session });
        // Update the Matic data
        await Matic.create([{
            price : maticData.usd,
            "24hChange" : maticData.usd_24h_change,
            marketCap : maticData.usd_market_cap
        }], { session });
        session.commitTransaction();
        console.log('Data updated successfully');
    } catch (error) {
        console.log(`Error: ${error.message}`);
        session.abortTransaction();
    }
    finally {
        session.endSession();
    }
}

module.exports = fatchUpdateData;