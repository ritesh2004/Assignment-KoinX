const mongoose = require('mongoose');

// Coin Schema
const ethereumSchema = new mongoose.Schema({
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
const Eth = mongoose.model('Eth', ethereumSchema);

module.exports = Eth;