const data = require('./data');

module.exports = {
  getData(req, res) {
    res.status(200).json(data);
  }
};
