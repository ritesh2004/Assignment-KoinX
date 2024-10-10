const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.DATABASE_URL, {
            dbName: "coinDB", // Database name
        });
        console.log(`MongoDB Connected: ${res.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}


module.exports = {
    connectDB
}