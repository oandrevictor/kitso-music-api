var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var dotenv = require('dotenv').load();
var path = require('path');

const app = express()
var db = require('./config/db');
var app_port = process.env.PORT || 3000
var ENV = process.env.ENVIROMENT || 'development'

var db_url;
(ENV == 'production')? db_url = db.url : db_url = db.local_url;
mongoose.connect(db_url);

// Settings
app.all("/*", function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  next();
})
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

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

// Routes
var authRouter = require('./api/auth/router');
var songRouter = require('./api/song/router');
var userRouter = require('./api/user/router');

app.use('/auth', authRouter);
app.use('/song', songRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static(path.join(__dirname, './public')));

app.listen(app_port, () => console.log("Kitso Music is ready and set on port " + app_port +"!"))
exports = module.exports = app;
