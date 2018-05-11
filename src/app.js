const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const exphbs = require('express-handlebars');
const helpers = require('./views/helpers/index');
 const bodyParser = require("body-parser");
const app = express();
const controllers = require('./controllers/index.js');

//set port
app.set('port' , process.env.PORT ||3000)

// set the app engin
app.set('views' , path.join(__dirname, 'views'));
app.set('view engine' , 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers
  })
);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname,'..','public')));
app.use(controllers);


module.exports = app;
