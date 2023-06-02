const { getCoinDataByBaseUnit } = require('../services/services');

async function renderBat(req, res) {
  try {
    const baseUnit = 'bat'; // Set the base_unit value to 'bat' for the example

    const coinData = await getCoinDataByBaseUnit(baseUnit);

    // Extract the required fields from the coinData
    const extractedData = coinData.map((coin) => {
      const { last, buy, sell, volume } = coin;
      return { last, buy, sell, volume };
    });

    res.render('bat', { coinData: extractedData });
  } catch (error) {
    console.error('Error rendering BAT page:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { renderBat };
