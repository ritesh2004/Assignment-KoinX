# Cryptocurrency Data Service

This service provides latest and coin price deviation data for Bitcoin, Ethereum, and Matic cryptocurrencies.

## API Endpoints

### Get Latest Data
- **Endpoint**: `/api/v1/stats`
- **Method**: POST
- **Body**: 
  - `coin`: 'bitcoin', 'ethereum', or 'matic'
- **Description**: Returns the latest data for the specified cryptocurrency.

### Get Price Deviation
- **Endpoint**: `/api/v1/deviation`
- **Method**: POST
- **Body**: 
  - `coin`: 'bitcoin', 'ethereum', or 'matic'
- **Description**: Calculates and returns the standard deviation of the price for the records of the specified cryptocurrency.

## Data Update
The service automatically fetches and updates cryptocurrency data at regular intervals(2 hours).

## Setup
1. Install dependencies: `npm install`
2. Set up your MongoDB connection.
3. Start the server: `npm run dev`