const axios = require('axios');
const { createcrypto } = require('../services/services')

async function fetchTickerData(req, res) {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickerData = response.data;

    // Extract specific fields from tickerData
    const extractedData = Object.keys(tickerData).map((key) => {
      const { name, last, buy, sell, volume, base_unit } = tickerData[key];
      return { name, last, buy, sell, volume, base_unit };
    });

    createcrypto( extractedData )
     
    console.log(extractedData);

    // Return the extracted data as the response
    res.json(extractedData);
  } catch (error) {
    console.error('Error fetching ticker data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = { fetchTickerData };
