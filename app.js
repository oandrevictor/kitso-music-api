var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var dotenv = require('dotenv').load();
var path = require('path');
var swagger = require('swagger-express');

const app = express()

// Settings
app.all("/*", function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  next();
})
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/', (req, res) => res.send('Hello World!'))

// session
require('./config/passport')(passport);
app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 30 * 60 // = 30 minutos de sessão
  }),
  secret: 'tempsecret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

var songRoutes = require('./routes/song');

// set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname, './public')));

///SWAGGER
app.use(swagger.init(app, {
  apiVersion: '1.0',
  swaggerVersion: '1.0',
  swaggerURL: '/swagger',
  swaggerJSON: '/api-docs.json',
  swaggerUI: './public/swagger/',
  basePath: 'http://localhost:3000',
  apis: ['./routes/song.js', 'app.js'],
  middleware: function(req, res){}
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
exports = module.exports = app;
