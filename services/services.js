// Importing the 'user' model from the '../models' module
const db = require('../models');
const crypto = db.crypto;

async function createcrypto(dataArray) {
  try {
    const inrData = dataArray
      .filter((coin) => coin.name.split('/')[1] === 'INR')
      .slice(0, 10);

    for (let i = 0; i < inrData.length; i++) {
      const info = {
        name: inrData[i].name,
        last: inrData[i].last,
        buy: inrData[i].buy,
        sell: inrData[i].sell,
        volume: inrData[i].volume,
        base_unit: inrData[i].base_unit
      };

      await crypto.create(info);
    }

    console.log('Data stored successfully in the database.');
  } catch (error) {
    console.error('Error storing data in the database:', error);
  }
}


async function fetchTop10Crypto() {
  try {
    const top10Crypto = await crypto.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10
    });

    return top10Crypto;
  } catch (error) {
    console.error('Error fetching top 10 crypto:', error);
    throw error;
  }
}

async function getCoinDataByBaseUnit(baseUnit) {
  try {
    const coinData = await crypto.findAll({
      where: {
        base_unit: baseUnit,
      },
    });
    return coinData;
  } catch (error) {
    console.error('Error retrieving coin data:', error);
    throw error;
  }
}


module.exports = {
  createcrypto,
  fetchTop10Crypto,
  getCoinDataByBaseUnit
};
