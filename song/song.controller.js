var Song = require('./song.model');
var RequestStatus = require('../utils/request_status');


exports.show = function(req, res) {
  Song.findById(req.params.song_id)
  .catch((err) => {
    res.status(RequestStatus.BAD_REQUEST).send(err);
  })
  .then(async function(song) {
    res.status(RequestStatus.OK).json(song);
  });
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
