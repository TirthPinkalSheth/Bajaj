// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const userId = 'john_doe_17091999';
const email = 'john@xyz.com';
const rollNumber = 'ABCD123';

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(400).json({ is_success: false, error: 'Invalid request' });
  }

  const numbers = [];
  const alphabets = [];
  let highestLowercaseAlphabet = [];

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === 'string' && item.length === 1) {
      alphabets.push(item);
      if (item.toLowerCase() > highestLowercaseAlphabet[0]) {
        highestLowercaseAlphabet = [item.toLowerCase()];
      } else if (item.toLowerCase() === highestLowercaseAlphabet[0]) {
        highestLowercaseAlphabet.push(item.toLowerCase());
      }
    }
  });

  res.json({
    is_success: true,
    user_id: userId,
    email,
    roll_number: rollNumber,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on port 3000');
});