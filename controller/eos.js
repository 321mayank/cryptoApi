const { getCoinDataByBaseUnit } = require('../services/services');

async function renderEos(req, res) {
  try {
    const baseUnit = 'eos'; 

    const coinData = await getCoinDataByBaseUnit(baseUnit);

    // Extract the required fields from the coinData
    const extractedData = coinData.map((coin) => {
      const { last, buy, sell, volume } = coin;
      return { last, buy, sell, volume };
    });

    res.render('eos', { coinData: extractedData });
  } catch (error) {
    console.error('Error rendering EOS page:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { renderEos };
