var mongoose = require('mongoose')
var Nav = mongoose.model('Nav')

// index page
exports.index = function(req, res) {
  Nav.findByTypes(function(err, navs) {
    if (err) {
      console.log(err)
    }
    console.log(navs)
    res.render('operator/index', {
      title: '运营方后台'
    })
  })
}