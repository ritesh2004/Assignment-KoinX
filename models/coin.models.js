const mongoose = require('mongoose');

// Coin Schema
const coinSchema = new mongoose.Schema({
    coin : {
        type: String,
        required: true
    },
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
const Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;