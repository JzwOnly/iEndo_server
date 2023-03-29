var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var packageJson = fs.readFileSync('././package.json');
  var version = JSON.parse(packageJson).version;
  res.render('index', { title: 'IEndo', 'version': version});
});


module.exports = router;
