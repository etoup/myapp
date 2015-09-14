var mongoose = require('mongoose')
var User = mongoose.model('User')

// index page
exports.index = function(req, res) {
  User.fetch(function(err, users) {
    if (err) {
      console.log(err)
    }

    res.render('operator/index', {
      title: '运营方后台'
    })
  })
}