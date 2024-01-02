# DZap Assignment Frontend

This is the frontend code for the DZap assignment, a React application that interacts with the DZap backend to display information about the top cryptocurrencies and perform currency conversion using the CoinMarketCap API.

## Deployment

The frontend is currently live and accessible at [https://dzap-frontend.netlify.app/](https://dzap-frontend.netlify.app/).

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/dzap-assignment-frontend.git
   ```

2. Install dependencies:

   ```bash
   cd dzap-assignment-frontend
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The development server will be running on `http://localhost:3000` by default.

## Features

### 1. Top Cryptocurrencies

- Displays a list of the top 100 cryptocurrencies.
- Fetches data from the DZap backend's `/api/topCryptos` endpoint.

### 2. Currency Conversion

- Allows users to convert an amount of a specific cryptocurrency to another currency.
- Utilizes the DZap backend's `/api/convert` endpoint for the conversion.

## Dependencies

- **React:** A JavaScript library for building user interfaces.
- **axios:** Promise-based HTTP client for making requests to the DZap backend.

## Structure

- `src/components`: Contains React components used in the application.
- `src/App.js`: Main application component.
- `src/index.js`: Entry point for the React application.

## Notes

- Ensure the DZap backend is running and reachable for proper functionality.
- Explore and customize the code to suit your requirements.
- For any issues or inquiries, please refer to the documentation or contact the repository owner.
