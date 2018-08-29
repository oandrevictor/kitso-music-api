var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

// Passport and sessions
require('./config/passport')(passport);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 30 * 60 // = 30 minutos de sessão
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

var songRoutes = require('./routes/song');

app.listen(6000, () => console.log('Example app listening on port 6000!'))
exports = module.exports = app;
