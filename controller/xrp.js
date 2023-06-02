const { getCoinDataByBaseUnit } = require('../services/services');

async function renderXrp(req, res) {
  try {
    const baseUnit = 'xrp'; // Set the base_unit value to 'btc' for the example

    const coinData = await getCoinDataByBaseUnit(baseUnit);

    // Extract the required fields from the coinData
    const extractedData = coinData.map((coin) => {
      const { last, buy, sell, volume } = coin;
      return { last, buy, sell, volume };
    });

    res.render('xrp', { coinData: extractedData });
  } catch (error) {
    console.error('Error rendering XRP page:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { renderXrp };
