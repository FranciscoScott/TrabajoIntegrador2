const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


var app = express();

//Rutas 
const indexRouter = require('./routes/index');
const productRouter = require('./routes/Product');
const profileRouter = require('./routes/Profile');
const db = require('./database/models');
const session = require('express-session')
const user = db.User
const searchResultsRouter = require('./routes/searchResults')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Middelware session
app.use(session({
  secret : 'myApp',
  resave : false,
  saveUninitialized : true
}));

//Middelware session
// app.use(function (req, res, next) {
//   if (req.session.user != undefined) {
//     res.locals.user = req.session.user

//     return next();
//   }
//   return next();
// });
app.use (function(req, res, next){
  res.locals.user = req.session.user;
  next()
})


//Middelware cookie
/* Middleware de cookies */
app.use(function(req, res, next) {
  if (req.cookies.userId != undefined && req.session.user == undefined) {

    let idUsuarioEnCookie = req.cookies.userId;
    
    db.User.findByPk(idUsuarioEnCookie)
    .then((user) => {
      req.session.user = user.dataValues;
      res.locals.user  = user.dataValues;
      return next();
    }).catch((err) => {
      console.log(err);
    });
  } else {
    return next();
  }
})

//CUANDO EL USUARIO REQUIERE / ALGO... 
app.use('/', indexRouter);
app.use('/searchResults', searchResultsRouter);
app.use('/product', productRouter);
app.use('/profile', profileRouter);


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
