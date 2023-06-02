const { getCoinDataByBaseUnit } = require('../services/services');

async function rendertrx(req, res) {
  try {
    const baseUnit = 'trx'; 

    const coinData = await getCoinDataByBaseUnit(baseUnit);

    // Extract the required fields from the coinData
    const extractedData = coinData.map((coin) => {
      const { last, buy, sell, volume } = coin;
      return { last, buy, sell, volume };
    });

    res.render('trx', { coinData: extractedData });
  } catch (error) {
    console.error('Error rendering trx page:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { rendertrx };
