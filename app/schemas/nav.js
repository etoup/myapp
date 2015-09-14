var mongoose = require('mongoose')


var NavSchema = new mongoose.Schema({
  title: {
    unique: true,
    type: String
  },
  url:{
    unique:true,
    type:String
  },
  target:Boolean,
  types:{
    types:Number,
    default:0 //0隐藏；1-前台导航；2-会员中心导航；3-场馆中心导航；4-后台导航
  },
  child:[],
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

NavSchema.statics = {
  findByTypes: function(cb) {
    return this
      .find({types:4})
      .sort('meta.updateAt')
      .exec(cb)
  },
  findById: function(id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
}

module.exports = NavSchema