const express = require('express');
const dotenv = require('dotenv');
dotenv.config(".env");

const app = express();

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    return res.send('Hello World');
});





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});