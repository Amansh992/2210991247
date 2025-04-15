const { fetchNumbers } = require('../services/numberService');

const calculateAverage = async (req, res) => {
  const { type } = req.params; // e.g., 'primes', 'fibo', 'even', 'rand'
  const validTypes = ['primes', 'fibo', 'even', 'rand'];

  if (!validTypes.includes(type)) {
    return res.status(400).json({ error: 'Invalid number type' });
  }

  // Maintain previous and current state
  let prevState = [];
  const currState = await fetchNumbers(type);

  // Calculate average of unique numbers
  const uniqueNumbers = [...new Set([...prevState, ...currState])];
  const average =
    uniqueNumbers.length > 0
      ? uniqueNumbers.reduce((sum, num) => sum + num, 0) / uniqueNumbers.length
      : 0;

  // Update previous state
  prevState = currState;

  res.json({
    windowPrevState: prevState,
    windowCurrState: currState,
    numbers: uniqueNumbers,
    avg: average.toFixed(2),
  });
};

module.exports = { calculateAverage };
