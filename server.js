const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./server/helpers/jwt');
const errorHandler = require('./server/helpers/error-handler');

// Environment Variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());

// app.use('/users', require('./server/controllers/users.controller'));

// app.use(errorHandler);

// Base path entry
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome!'
  });
});

const server = app.listen(PORT, () => {
  console.log(`App server running at http://localhost:${PORT}`);
});
