var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var dotenv = require('dotenv').load();
var path = require('path');
var cors = require("cors");

const app = express()
var db = require('./config/db');
var app_port = process.env.PORT || 3000
var ENV = process.env.ENVIROMENT || 'development'

var db_url;
(ENV == 'production')? db_url = db.url : db_url = db.local_url;
mongoose.connect(db_url);

var allowedOrigins = ['http://localhost:3000'];

// Settings
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// session

// Routes
app.use(cors({
  origin: ['http://localhost:3000', 'https://kitsomusic.herokuapp.com'],
  methods:['GET','POST'],
  credentials: true
}));

var authRouter = require('./api/auth/router');
var albumRouter = require('./api/album/router');
var songRouter = require('./api/song/router');
var userRouter = require('./api/user/router');
var userAuthRouter = require('./api/auth/router');
var performerRouter = require('./api/performer/router');

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
app.use('/auth', authRouter);
app.use('/song', songRouter);
app.use('/album', albumRouter);
app.use('/auth', userAuthRouter);
app.use('/user', userRouter);
app.use('/performer', performerRouter);

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static(path.join(__dirname, './apidoc')));

app.use(express.static(path.join(__dirname, './public')));

app.listen(app_port, () => console.log("Kitso Music is ready and set on port " + app_port +"!"))
exports = module.exports = app;
