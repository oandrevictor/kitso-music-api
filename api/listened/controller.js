var Listened = require('./model');
var RequestStatus = require('../utils/request_status');

exports.index = async function(req, res) {
  let listened_id = req.query.listened_id;
  try {
    var listeneds = await Listened.find({}).exec();
    res.status(RequestStatus.OK).json(listeneds);
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).json(err);
  }
};

exports.show = function(req, res) {
  Listened.findById(req.params.listened_id)
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then(async function(listened) {
    res.status(RequestStatus.OK).json(listened);
  });
};

exports.update = function(req, res) {
  Listened.updateOne({_id: req.params.book}, {$set: req.body})
  .then((updatedListened)=>{
    res.status(RequestStatus.OK).json(updatedListened);
  })
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
};

exports.delete = function(req, res) {
  try {
    Listened.remove({ _id: req.params.listened_id}).exec();
    res.status(RequestStatus.OK).send('Listened deleted.');
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  }
};

exports.create = function(req, res) {
  var listened = new Listened(req.body);
  Listened.save()
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then((createdListened) => {
    res.status(RequestStatus.OK).send(createdListened);
  });
};
