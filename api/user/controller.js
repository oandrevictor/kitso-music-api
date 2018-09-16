var bcrypt = require('bcryptjs');
var _ = require('underscore');
var mongoose       = require('mongoose');

var User = require('./model');
var RequestStatus = require('../utils/request_status');

exports.index = function (req, res) {
  User.find({})
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then((result) => {
    res.status(RequestStatus.OK).json(result);
  });
};

exports.show = function (req, res) {
  if (mongoose.Types.ObjectId.isValid(req.params.user_id)){
    User.findById(req.params.user_id)
    .catch((err) => {
      res.status(RequestStatus.BAD_REQUEST).send(err);
    })
    .then((result) => {
      res.status(RequestStatus.OK).json(result);
    });
  }
  else {
    User.findOne({ username: req.params.user_id })
    .catch((err) => {
      res.status(RequestStatus.BAD_REQUEST).send(err);
    })
    .then((result) => {
      res.status(RequestStatus.OK).json(result);
    });
  }
};

exports.findby = function (req, res) {
  if (req.query.username) {
    User.findOne({ username: req.query.username })
    .catch((err) => {
      res.status(RequestStatus.BAD_REQUEST).send(err);
    })
    .then((result) => {
      res.status(RequestStatus.OK).json(result);
    });
  }

};

exports.findByEmail = function (req, res) {
  User.findOne({email: req.body.email})
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then((result) => {
    if (result) res.status(RequestStatus.OK).json(result);
    else res.status(RequestStatus.BAD_REQUEST).json('User not found.');
  });
}

exports.create = function (req, res) {
  var user = new User(req.body);

  bcrypt.hash(req.body.password, 10, async function (err, hash) {
    if (err) {
      res.status(RequestStatus.BAD_REQUEST).send(err);
    } else {
      user.password = hash;
      user.save(async function (err) {
        if (err) return res.status(RequestStatus.FORBIDDEN).send(err);
        res.status(RequestStatus.OK).send('User created.');
      });
    }
  });
}

exports.update = function (req, res) {
  User.findById(req.params.user_id)
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then((user) => {
    if (req.user && req.user._id.toString() === user._id.toString()) {
      if (req.body.name) user.name = req.body.name;
      if (req.body.username) user.username = req.body.username;
      if (req.body.email) user.email = req.body.email;
      if (req.body.birthday) user.birthday = req.body.birthday;
      if (req.body.gender) user.gender = req.body.gender;
      if (req.body.description) user.description = req.body.description;

      user.save(function (err) {
        if (err) {
          if (err.name === 'MongoError' && err.code === 11000) {
            return res.status(RequestStatus.FORBIDDEN).send(err);
          }
        } else {
          user = _.omit(user.toJSON(), 'password');
          return res.status(RequestStatus.OK).json(user);
        }
      });
    } else {
      return res.status(RequestStatus.UNAUTHORIZED).send({message: 'You need to be authenticated to edit your user info.' });
    }

  });
};

exports.updatePassword = function(req, res) {
  User.findOne({ email: req.body.email})
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send('User not found.');
  })
  .then((user) => {
    if (user.new_password) {
      user.password = user.new_password;
      user.new_password = null;

      user.save(function(err) {
        if (err) {
          return res.status(RequestStatus.FORBIDDEN).send(err);
        } else {
          return res.status(RequestStatus.OK).send('Password updated!');
        }
      });
    } else {
      return res.status(RequestStatus.NOT_FOUND).send('New password not found. Please try again.');
    }
  });
};

exports.delete = function (req, res) {
  User.findById(req.params.user_id)
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then(async (user) => {
    if (req.user && req.user._id.toString() == user._id.toString() && user.validPassword(req.body.password)) {
      let listened_list = await Listened.find({_user: user._id}).exec();
      let playlist_list = await Playlist.find({_user: user._id}).exec();
      let promises = [];
      listened_list.map((listened) => {
        promises.push(Listened.remove(listened).exec());
        promises.push(Action.remove({_id: listened._action}).exec());
      });
      playlist_list.map((playlist) => {
        promises.push(Playlist.remove(playlist).exec());
        promises.push(Action.remove({_id: playlist._action}).exec());
      });
      await Promise.all(promises).then((result) => {
        User.remove({ _id: req.params.user_id })
        .catch((err) => {
          res.status(RequestStatus.BAD_REQUEST).send({ status: RequestStatus.BAD_REQUEST, message: err });
        })
        .then(() => {
          req.logout();
          res.status(RequestStatus.OK).send('User successfully removed.');
        });
      });
    } else {
      return res.status(RequestStatus.UNAUTHORIZED).json({ status: 401, message: 'UNAUTHORIZED' });
    }
  });
};
