var fs = require('fs');
var conf = require('../common/config');
var xml2json = require('xml2json');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/all', function(req, res, next) {
  const xml = fs.readFileSync(conf.input_file.PATH)
  const json = xml2json.toJson(xml);
  res.setHeader('Content-Type', 'application/json');
  res.send(json);
});

module.exports = router;
