const express = require('express');
const dotenv = require('dotenv');
const {connectDB} = require('./database/index');
dotenv.config(".env"); // Load environment variables

const app = express(); // Initialize the express app
connectDB(); // Connect to the database

const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    return res.send('Hello World');
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});