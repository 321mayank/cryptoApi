const { getCoinDataByBaseUnit } = require('../services/services');

async function renderzrx(req, res) {
  try {
    const baseUnit = 'zrx'; 

    const coinData = await getCoinDataByBaseUnit(baseUnit);

    // Extract the required fields from the coinData
    const extractedData = coinData.map((coin) => {
      const { last, buy, sell, volume } = coin;
      return { last, buy, sell, volume };
    });

    res.render('zrx', { coinData: extractedData });
  } catch (error) {
    console.error('Error rendering zrx page:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { renderzrx };
