var express = require('express');
var router = express.Router();

var songController = require('./song.controller');

//router.get('/', songController.index);

router.get('/:song_id', songController.show);

router.post('/', songController.create);

//router.put('/:song_id', songController.update);

//router.delete('/:song_id', songController.delete);

module.exports = router;
