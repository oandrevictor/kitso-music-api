var Song = require('./model');
var RequestStatus = require('../utils/request_status');

exports.index = async function(req, res) {
  let performer_id = req.query.performer_id;
  try {
    if (performer_id){
      var songs = await Song.find({ _performers: { $all : [performer_id] }}).exec();
    }else {
      var songs = await Song.find({}).exec();
    }
    res.status(RequestStatus.OK).json(songs);
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).json(err);
  }
};

exports.show = function(req, res) {
  Song.findById(req.params.song_id).populate('_albuns', '_performers')
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then(async function(song) {
    res.status(RequestStatus.OK).json(song);
  });
};

exports.update = function(req, res) {
  Song.updateOne({_id: req.params.book}, {$set: req.body})
  .then((updatedSong)=>{
    res.status(RequestStatus.OK).json(updatedSong);
  })
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
};

exports.delete = function(req, res) {
  try {
    Song.remove({ _id: req.params.song_id}).exec();
    res.status(RequestStatus.OK).send('Song deleted.');
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  }
};

exports.create = function(req, res) {
  var song = new Song(req.body);
  song.save()
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then((createdsong) => {
    res.status(RequestStatus.OK).send(createdsong);
  });
};
