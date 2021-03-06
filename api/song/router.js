var express = require('express');
var router = express.Router();

var songController = require('./controller');

var ensureAuthenticated = function(req, res, next){
  if (!req.isAuthenticated())
    res.sendStatus(401);
  else
    next();
};

/**
 * @apiDefine SongParams
 * @apiParam {String} spotify_id The spotify id of the song.
 * @apiParam {String} title Title of the song.
 * @apiParam {Array} _composers An array with the id of the song's composers.
 * @apiParam {Array} _performers An array with the id of the song's performers.
 * @apiParam {Array} _albuns An array with the id of the albuns in which the song is contained.
 * @apiParam {String} _lyrics An id for the song's lyrics.
 * @apiParam {Array} _videos An array with the id of the song's composers.
 * @apiParam {Number} duration_ms The duration of the song in milliseconds.
 *
 * @apiParam {Date} release_date Release date of the song.
 * @apiParam {Boolean} is_explicit If the song contains or not explicit language.
 */


/**
 * @api {get} /song Get Information from multiple songs given some criteria
 * @apiName GetSongs
 * @apiGroup Song
 *
 * @apiUse SongParams
 *
 */
router.get('/', songController.index);

/**
 * @api {get} /song Get Information from a song given the id
 * @apiName GetSong
 * @apiGroup Song
 *
 * @apiParam {String} song_id The id of the song.
 *
 */
router.get('/:song_id', songController.show);

/**
 * @api {post} /song Create a song
 * @apiName PostSong
 * @apiGroup Song
 *
 * @apiUse SongParams
 *
 */
router.post('/', songController.create);

/**
 * @api {put} /song Update the information for a song, given its id
 * @apiName PutSong
 * @apiGroup Song
 *
 * @apiParam {String} song_id The id of the song.
 * @apiUse SongParams
 *
 */
router.put('/:song_id', ensureAuthenticated, songController.update);

/**
 * @api {delete} /song Delete a song given the id
 * @apiName DeleteSong
 * @apiGroup Song
 *
 * @apiParam {String} song_id The id of the song.
 *
 */
router.delete('/:song_id', songController.delete);

module.exports = router;
