Lyricsvar Lyrics = require('./model');
var RequestStatus = require('../utils/request_status');

exports.index = async function(req, res) {
  let lyrics_id = req.query.lyrics_id;
  try {
    var lyrics = await Lyrics.find({}).exec();
    res.status(RequestStatus.OK).json(lyrics);
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).json(err);
  }
};

exports.show = function(req, res) {
  Lyrics.findById(req.params.lyrics_id)
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then(async function(lyrics) {
    res.status(RequestStatus.OK).json(lyrics);
  });
};

exports.update = function(req, res) {
  Lyrics.updateOne({_id: req.params.book}, {$set: req.body})
  .then((updatedLyrics)=>{
    res.status(RequestStatus.OK).json(updatedLyrics);
  })
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
};

exports.delete = function(req, res) {
  try {
    Lyrics.remove({ _id: req.params.lyrics_id}).exec();
    res.status(RequestStatus.OK).send('Lyrics deleted.');
  } catch (err) {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  }
};

exports.create = function(req, res) {
  var lyrics = new Lyrics(req.body);
  lyrics.save()
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then((createdLyrics) => {
    res.status(RequestStatus.OK).send(createdLyrics);
  });
};
