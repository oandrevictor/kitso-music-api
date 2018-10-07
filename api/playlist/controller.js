var Album = require('./model');
var RequestStatus = require('../utils/request_status');

exports.index = async function(req, res) {
  let album_id = req.query.album_id;
  try {
    var albums = await Album.find({}).exec();
    res.status(RequestStatus.OK).json(albums);
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).json(err);
  }
};

exports.show = function(req, res) {
  Album.findById(req.params.album_id)
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then(async function(album) {
    res.status(RequestStatus.OK).json(album);
  });
};

exports.update = function(req, res) {
  Album.updateOne({_id: req.params.book}, {$set: req.body})
  .then((updatedAlbum)=>{
    res.status(RequestStatus.OK).json(updatedAlbum);
  })
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
};

exports.delete = function(req, res) {
  try {
    Album.remove({ _id: req.params.album_id}).exec();
    res.status(RequestStatus.OK).send('Album deleted.');
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  }
};

exports.create = function(req, res) {
  var album = new Album(req.body);
  Album.save()
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then((createdAlbum) => {
    res.status(RequestStatus.OK).send(createdAlbum);
  });
};
