const express = require('express');
const { calculateAverage } = require('./controllers/averageController');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/numbers/:type', calculateAverage);

app.listen(port, () => {
  console.log(`Average Calculator running on http://localhost:${port}`);
});
