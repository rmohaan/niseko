var requestify = require('requestify');

 var options = {
   host: 'http://starlord.hackerearth.com/kickstarter'
 };

module.exports = {
  getData (req, res) {
    console.log("requestify initated");
    var resp  = res;
    requestify.get('http://starlord.hackerearth.com/kickstarter')
      .then(function(response) {
        resp.status(200).json(response.getBody());
      });
  },

  submitData (req, res, db) {
    req.body.createdOn = new Date();
    db.collection('customers').insert(req.body, function (err, results) {
      if (results.result.ok === 1) {
        res.status(200).json(results);
      } else {
        res.status(500).json({
          message: "Request Failed"
        });
      }
    });
  }
};
