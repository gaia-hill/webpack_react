var express = require('express');

var path = require('path');

var http = require("http");

//添加路由
var routes = require('./routes/router');

var app = express();

//配置生产环境和开发环境目录
var pubPath = app.get("env")==="development"?"dist":"bin";

//配置静态资源目录
app.use(express.static(path.join(__dirname, pubPath)));

//配置路由
app.use('/', routes);

// 捕获出现的404错误
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//捕获500错误，将错误抛出
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

//设置服务器监听的端口
var port = process.env.PORT || 3000;
app.set('port', port);

//创建http服务器
var server = http.createServer(app);

// 监听设置的端口
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

//服务器出错时的监听事件
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error('port ' + port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('port ' + port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//服务器listening事件监听
function onListening() {
  var addr = server.address();
  console.log('Listening on port ' + addr.port);
}

module.exports = app;
