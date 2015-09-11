var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('operator/index', { title: '运营方后台' });
});

module.exports = router;
