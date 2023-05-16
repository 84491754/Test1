var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var left = require('./routes/left');
var right = require('./routes/right');
var bannerList = require('./routes/bannerList');
var addBanner = require('./routes/addBanner');
var like = require('./routes/like');
var del = require('./routes/del');
var update = require('./routes/update');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//首页
app.use('/admin', indexRouter);
//左侧
app.use('/left', left);
//右侧
app.use('/right', right);
//banner图
app.use('/bannerList', bannerList);
//上传banner图
app.use('/addBanner', addBanner);
//搜索功能
app.use('/like', like);
//删除功能
app.use('/del', del);
//修改功能
app.use('/update', update);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
