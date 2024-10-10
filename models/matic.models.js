const mongoose = require('mongoose');

// Coin Schema
const maticSchema = new mongoose.Schema({
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
const Matic = mongoose.model('Matic', maticSchema);

module.exports = Matic;