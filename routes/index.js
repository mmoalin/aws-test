var express = require('express');
var APIProxy = require('../companiesHousesAPIProxy');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/api/proxyCompanyHouse', function(req, res, next) {
  let api = new APIProxy(res, (json) => {
    this.res.send(json);
  });
  let url = "https://api.companieshouse.gov.uk/search/companies?q=AKZO+Nobel";
  api.fetchUrl(url);
 });
module.exports = router;
