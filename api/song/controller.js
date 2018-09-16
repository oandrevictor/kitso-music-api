var Song = require('./model');
var RequestStatus = require('../utils/request_status');

exports.index = async function(req, res) {
  let performer_id = req.query.performer_id;
  try {
    var songs = await Song.find({ _performers: { $all : [performer_id] }}).exec();
    res.status(RequestStatus.OK).json(songs);
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).json(err);
  }
};

exports.show = function(req, res) {
  Song.findById(req.params.song_id)
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then(async function(song) {
    res.status(RequestStatus.OK).json(song);
  });
};

exports.update = function(req, res) {
  Song.findById(req.params.song_id)
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then((song) => {
    if (req.body.title) song.title = req.body.title;
    if (req.body.duration_ms) song.duration_ms = req.body.duration_ms;
    if (req.body.release_date) song.release_date = req.body.release_date;
    if (req.body.spotify_id) song.spotify_id = req.body.spotify_id;
    if (req.body.videos) song.videos = req.body.videos;
    if (req.body.is_explicit) song.is_explicit = req.body.is_explicit;
    if (req.body._performers) song._performers = req.body._performesr;
    if (req.body._composers) song._composers = req.body._composers;
    if (req.body._lyrics) song._lyrics = req.body._lyrics;
    if (req.body._albuns) song._albuns = req.body._albuns;
    song.save()
    .catch((err) => {
      res.status(RequestStatus.BAD_REQUEST).send(err);
    })
    .then((updatedsong) => {
      res.status(RequestStatus.OK).json(updatedsong);
    });
  });
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
