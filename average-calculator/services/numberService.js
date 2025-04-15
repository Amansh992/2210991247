const apiClient = require('../utils/apiClient');

const fetchNumbers = async (type) => {
  try {
    const response = await apiClient.get(`/${type}`);
    return response.data.numbers || [];
  } catch (error) {
    console.error(`Error fetching ${type} numbers:`, error.message);
    return [];
  }
};

module.exports = { fetchNumbers };
