var Action = require('./model');
var RequestStatus = require('../utils/request_status');

exports.index = async function(req, res) {
  let action_id = req.query.action_id;
  try {
    var actions = await Action.find({}).exec();
    res.status(RequestStatus.OK).json(actions);
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).json(err);
  }
};

exports.show = function(req, res) {
  Action.findById(req.params.action_id)
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then(async function(action) {
    res.status(RequestStatus.OK).json(action);
  });
};

exports.update = function(req, res) {
  Action.updateOne({_id: req.params.book}, {$set: req.body})
  .then((updatedAction)=>{
    res.status(RequestStatus.OK).json(updatedAction);
  })
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
};

exports.delete = function(req, res) {
  try {
    Action.remove({ _id: req.params.action_id}).exec();
    res.status(RequestStatus.OK).send('Action deleted.');
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  }
};

exports.create = function(req, res) {
  var action = new Action(req.body);
  Action.save()
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then((createdAction) => {
    res.status(RequestStatus.OK).send(createdAction);
  });
};
