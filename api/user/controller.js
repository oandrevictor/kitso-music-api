var Song = require('./model');
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
