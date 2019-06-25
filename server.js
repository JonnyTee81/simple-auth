const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Environment Variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Base path entry
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome!'
  });
});

const server = app.listen(PORT, () => {
  console.log(`App server running at http://localhost:${PORT}`);
});
