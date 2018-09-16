var express = require('express');
var router = express.Router();

var songController = require('./controller');

/**
 * @api {get} /song Get Information from multiple songs given some criteria
 * @apiName PostSong
 * @apiGroup Song
 *
 * @apiParam {String} title Title of the song.
 * @apiParam {Number} duration_ms The duration of the song in milliseconds.

 * @apiParam {Date} release_date Release date of the song.
 * @apiParam {Boolean} is_explicit If the song contains or not explicit language.
 *
 */
router.get('/', songController.index);

router.get('/:song_id', songController.show);

/**
 * @api {post} /song Create a Song
 * @apiName PostSong
 * @apiGroup Song
 *
 * @apiParam {String} title Title of the song.
 * @apiParam {Number} duration_ms The duration of the song in milliseconds.

 * @apiParam {Date} release_date Release date of the song.
 * @apiParam {Boolean} is_explicit If the song contains or not explicit language.
 *
 */
router.post('/', songController.create);

router.put('/:song_id', songController.update);

router.delete('/:song_id', songController.delete);

module.exports = router;
