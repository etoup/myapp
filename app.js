var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs')
mongoose.connect('mongodb://localhost/operator');

var app = express();

var models_path = __dirname + '/app/models'
var walk = function(path) {
  fs
    .readdirSync(path)
    .forEach(function(file) {
      var newPath = path + '/' + file
      var stat = fs.statSync(newPath)

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(newPath)
        }
      }
      else if (stat.isDirectory()) {
        walk(newPath)
      }
    })
}
walk(models_path)

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./config/operator')(app); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
  app.locals.pretty = true
  mongoose.set('debug', true)
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
