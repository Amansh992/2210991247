const express = require('express');
const { getAnalytics } = require('./controllers/analyticsController');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.get('/analytics/:platform', getAnalytics);

app.listen(port, () => {
  console.log(`Social Media Analytics running on http://localhost:${port}`);
});
