const axios = require('axios');

// Fetch data from the API

const fetchData = async () => {
    try {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,matic-network,ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true');
        console.log(data);
        return data;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

module.exports = fetchData;