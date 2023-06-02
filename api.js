const axios = require('axios');


async function fetchTop10INRCoins() {
  try {
    const exchangeResponse = await axios.get('https://api.coingecko.com/api/v3/exchanges');
    const exchangeId = exchangeResponse.data.find(exchange => exchange.name === 'Indian Rupee (INR)').id;

    const tickersResponse = await axios.get(`https://api.coingecko.com/api/v3/exchanges/${exchangeId}/tickers`);
    const tickers = tickersResponse.data.tickers;

    const sortedTickers = tickers.sort((a, b) => b.volume - a.volume);
    const top10INRTickers = sortedTickers.slice(0, 10);

    console.log(top10INRTickers);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchTop10INRCoins();

