var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('operator/index', { title: '运营方后台' });
});
router.get('/picture', function(req, res, next) {
  res.render('operator/picture', { title: '系统配置' });
});

module.exports = router;
