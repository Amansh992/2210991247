const { fetchAnalytics } = require('../services/analyticsService');

const getAnalytics = async (req, res) => {
  const { platform } = req.params; // e.g., 'facebook', 'twitter', 'linkedin', 'instagram'
  const validPlatforms = ['facebook', 'twitter', 'linkedin', 'instagram'];

  if (!validPlatforms.includes(platform)) {
    return res.status(400).json({ error: 'Invalid platform' });
  }

  const data = await fetchAnalytics(platform);

  // Assuming test server returns metrics like followers, posts, engagement
  const aggregated = {
    platform,
    followers: data.followers || 0,
    posts: data.posts || 0,
    engagementRate: data.engagementRate || 0,
  };

  res.json(aggregated);
};

module.exports = { getAnalytics };
