const express = require('express');
const dotenv = require('dotenv');
const {connectDB} = require('./database/index');
const coinRouter = require('./routes/coin.routes');
const cors = require('cors');
dotenv.config(".env"); // Load environment variables
const app = express(); // Initialize the express app
connectDB(); // Connect to the database

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
// CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
}));
// Routes
app.use('/api/v1/', coinRouter);

// Home route
app.get('/', (req, res) => {
    return res.send('Hello World');
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});