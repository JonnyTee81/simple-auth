require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(`Error connecting: ${err}`));
mongoose.Promise = global.Promise;

module.exports = {
  User: require('../models/user.model')
};
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = {
  User: require('../users/user.model')
};
