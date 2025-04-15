const apiClient = require('../utils/apiClient');

const fetchAnalytics = async (platform) => {
  try {
    const response = await apiClient.get(`/${platform}`);
    return response.data || {};
  } catch (error) {
    console.error(`Error fetching ${platform} analytics:`, error.message);
    return {};
  }
};

module.exports = { fetchAnalytics };
