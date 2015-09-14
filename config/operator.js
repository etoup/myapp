var operator = require('../app/controllers/operator')
module.exports = function(app) {
  //预处理
  app.use(function(req, res, next) {
    next()
  })
  //首页
  app.get('/operator/index', operator.index);
}

