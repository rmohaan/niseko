const data = require('./data');

module.exports = {
  getData(req, res) {
    console.log("request came")
    res.status(200).json(data);
  }
};
