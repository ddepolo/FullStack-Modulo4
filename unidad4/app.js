var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');
app.use(session({
  secret: '4asd5sa4d5a', 
  resave: false, 
  saveUninitialized: true
}));
/*
app.use('/', indexRouter);
app.use('/users', usersRouter);
*/

app.post('/', function (req, res) {
  var pi = req.body.pi
  const bot1 = req.body.bot1

  if(bot1==1){
    if(pi == '3.14159265359'){
      respuesta = "De verdad typeaste todo eso?";
      muestraPi = false;
    }else{
      respuesta = "El numero no es Pi!";  
      muestraPi = false;
    }
    
  }else{
    respuesta = "De acuerdo aquí esta Pi...";
    muestraPi = true;
  }

  req.session.respuesta = respuesta;
  req.session.muestraPi = muestraPi;
  res.redirect('/');
})

app.get('/', function(req, res, next) {
  var resp = req.session.respuesta;
  var muestraPi = Boolean(req.session.muestraPi);
  console.log('test2: '+req.session.respuesta);

  res.render('index', { 
    title: 'Ingrese el numero Pi en 13 caracteres.',
    mensaje: resp,
    pi: '3.14159265359',
    ok: muestraPi
  });
  
});

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
