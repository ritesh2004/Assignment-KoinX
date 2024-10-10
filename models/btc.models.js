const mongoose = require('mongoose');

// Coin Schema
const btcSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    "24hChange": {
        type: Number,
        required: true
    },
    marketCap: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

// Coin Model
const Btc = mongoose.model('Btc', btcSchema);

module.exports = Btc;