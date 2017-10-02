var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

//MODELS

//ROUTES
var indexRoute = require('./routes/index');


app.use('/', indexRoute);
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/unitegallery', express.static(__dirname + '/public/unitegallery'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/project_images', express.static(__dirname + '/public/project_img'));
app.use('/demos', express.static(__dirname + '/public/demos'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

var server_port = process.env.PORT || 8080;
var server = app.listen(server_port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});