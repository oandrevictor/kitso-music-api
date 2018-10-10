Lyricsvar express = require('express');
var router = express.Router();

var lyricsController = require('./controller');

var ensureAuthenticated = function(req, res, next){
  if (!req.isAuthenticated())
    res.sendStatus(401);
  else
    next();
};

/**
 * @apiDefine LyricsParams
 * @apiParam {String} body The lyrics itself.
 * @apiParam {String} _song The id of the lyrics' song.
 * @apiParam {Boolean} is_explicit If the lyrics contains or not explicit language.
 */


/**
 * @api {get} /lyrics Get Information from multiple lyricss given some criteria
 * @apiName GetLyrics
 * @apiGroup Lyrics
 *
 * @apiUse LyricsParams
 *
 */
router.get('/', lyricsController.index);

/**
 * @api {post} /lyrics Create a lyrics
 * @apiName PostLyrics
 * @apiGroup Lyrics
 *
 * @apiUse LyricsParams
 *
 */
router.post('/', ensureAuthenticated, lyricsController.create);

/**
 * @api {get} /lyrics Get Information from a lyrics given the id.
 * @apiName GetLyrics
 * @apiGroup Lyrics
 *
 * @apiParam {String} lyrics_id The id of the lyrics.
 *
 */
router.get('/:lyrics_id', lyricsController.show);

/**
 * @api {put} /lyrics Update the information for a lyrics, given its id.
 * @apiName PutLyrics
 * @apiGroup Lyrics
 *
 * @apiParam {String} lyrics_id The id of the lyrics.
 * @apiUse LyricsParams
 *
 */
router.put('/:lyrics_id', ensureAuthenticated, lyricsController.update);

/**
 * @api {delete} /lyrics Delete a lyrics given the id.
 * @apiName DeleteLyrics
 * @apiGroup Lyrics
 *
 * @apiParam {String} lyrics_id The id of the lyrics.
 *
 */
router.delete('/:lyrics_id', ensureAuthenticated, lyricsController.delete);

module.exports = router;
