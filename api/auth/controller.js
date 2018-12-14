var bcrypt = require('bcryptjs');
var passport = require('passport');
var _        = require('underscore');
var RequestStatus = require('../utils/request_status');

exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) return res.status(RequestStatus.UNAUTHORIZED).json({ err: info });
    req.logIn(user, function(err) {
      console.log(req.sessionID)
      if (err) return res.status(RequestStatus.INTERNAL_SERVER_ERROR).json({ err: 'Could not log in user' });
      res.status(RequestStatus.OK).json({ status: 'Login successful!', session: req.sessionID });
    });
  })(req, res, next);
}

exports.logout = function(req, res) {
  req.logout();
  res.status(RequestStatus.OK).send({status:'Logged out!'})
}

exports.status = function(req, res) {
  var user = req.user;
  if (user) {
    user = _.omit(user.toJSON(), 'password');
    res.status(RequestStatus.OK).send({user: user, status: true});
  } else {
    res.status(RequestStatus.OK).send({status: false});
  }
}
