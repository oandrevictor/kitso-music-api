var Performer = require('./model');
var RequestStatus = require('../utils/request_status');

exports.index = async function(req, res) {
  let performer_id = req.query.performer_id;
  try {
    var performers = await Performer.find({}).exec();
    res.status(RequestStatus.OK).json(performers);
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).json(err);
  }
};

exports.show = function(req, res) {
  Performer.findById(req.params.performer_id)
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then(async function(performer) {
    res.status(RequestStatus.OK).json(Perfor);
  });
};

exports.update = function(req, res) {
  Performer.updateOne({_id: req.params.book}, {$set: req.body})
  .then((updatedPerformer)=>{
    res.status(RequestStatus.OK).json(updatedPerformer);
  })
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
};

exports.delete = function(req, res) {
  try {
    Performer.remove({ _id: req.params.performer_id}).exec();
    res.status(RequestStatus.OK).send('Performer deleted.');
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  }
};

exports.create = function(req, res) {
  var performer = new Performer(req.body);
  Performer.save()
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then((createdPerformer) => {
    res.status(RequestStatus.OK).send(createdPerformer);
  });
};
