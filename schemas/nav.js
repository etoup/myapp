var mongoose = require('mongoose')

var navSchema = new mongoose.Schema({
  name:String,
  url:String,
  types:String,
  target:Boolean
})

module.exports = navSchema