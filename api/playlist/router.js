var express = require('express');
var router = express.Router();

var playlistController = require('./controller');

/**
 * @apiDefine PlaylistParams
 * @apiParam {String} spotify_id The spotify id of the song.
 * @apiParam {String} title Title of the playlist.
 * @apiParam {String} _user The owner of the playlist (must provide the user's id).
 * @apiParam {Date} updated_date Date of the last update in the playlist.
 * @apiParam {Boolean} hidden If the playlist if private to the user and should be hidden for others.
 */


 /**
  * @api {get} /playlist Retrive Information (multiple) given some criteria
  * @apiName GetPlaylists
  * @apiGroup Playlist
  *
  * @apiUse PlaylistParams
  *
  */
router.get('/', playlistController.index);

/**
 * @api {post} /playlist Create
 * @apiName PostPlaylist
 * @apiGroup Playlist
 *
 * @apiUse PlaylistParams
 *
 */
router.post('/', playlistController.create);

/**
 * @api {get} /playlist Retrieve Information (single)
 * @apiName GetPlaylist
 * @apiGroup Playlist
 *
 * @apiParam {String} playlist_id The id of the playlist.
 *
 */
router.get('/:playlist_id', playlistController.show);

/**
 * @api {put} /playlist Update the information for a playlist, given its id
 * @apiName PutPlaylist
 * @apiGroup Playlist
 *
 * @apiParam {String} playlist_id The id of the playlist.
 * @apiUse PlaylistParams
 *
 */
router.put('/:playlist_id', playlistController.update);

/**
 * @api {delete} /playlist Delete a playlist given the id
 * @apiName DeletePlaylist
 * @apiGroup Playlist
 *
 * @apiParam {String} playlist_id The id of the playlist.
 *
 */
router.delete('/:playlist_id', playlistController.delete);

module.exports = router;
