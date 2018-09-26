var express = require('express');
var router = express.Router();

var playlistController = require('./controller');

router.get('/', playlistController.index);

router.post('/', playlistController.create);

router.get('/:playlist_id', playlistController.show);

router.put('/:playlist_id', playlistController.update);

router.delete('/:playlist_id', playlistController.delete);

module.exports = router;
