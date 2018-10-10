var express = require('express');
var router = express.Router();

var albumController = require('./controller');

/**
 * @apiDefine AlbumParams
 * @apiParam {String} title  Title of the album.
 * @apiParam {String} spotify_id  The spotify's id of the album.
 * @apiParam {Date} release_date  The album release date.
 * @apiParam {String[]} _songs An array with the ids of the album's songs.
 * @apiParam {String[]} _artist An array with the ids of the album's performers.
 */

/**
 * @api {get} /album Get Information from multiple albuns given some criteria
 * @apiName GetAlbum
 * @apiGroup Album
 *
 * @apiUse AlbumParams
 *
 * @apiSuccess {Object[]} albuns All albuns registered.
 */
router.get('/', albumController.index);

/**
 * @api {post} /album Create a listen activity
 * @apiName PostAlbum
 * @apiGroup Album
 *
 * @apiUse AlbumParams
 *
 * @apiSuccess {String} album.title  Title of the album.
 * @apiSuccess {String} album.spotify_id  The spotify's id of the album.
 * @apiSuccess {Date} album.release_date  The album release date.
 * @apiSuccess {String[]} album._songs An array with the ids of the album's songs.
 * @apiSuccess {String[]} album._artist An array with the ids of the album's performers.
 */
router.post('/', albumController.create);

/**
 * @api {get} /album Get Information from a listen activity given the id.
 * @apiName GetAlbum
 * @apiGroup Album
 *
 * @apiParam {String} album_id The id of the listen activity.
 *
 * @apiSuccess {String} album.title  Title of the album.
 * @apiSuccess {String} album.spotify_id  The spotify's id of the album.
 * @apiSuccess {Date} album.release_date  The album release date.
 * @apiSuccess {String[]} album._songs An array with the ids of the album's songs.
 * @apiSuccess {String[]} album._artist An array with the ids of the album's performers.
 */
router.get('/:album_id', albumController.show);

/**
 * @api {put} /album Update the information for a listen activity, given its id.
 * @apiName PutAlbum
 * @apiGroup Album
 *
 * @apiParam {String} album_id The id of the listen activity.
 * @apiUse AlbumParams
 *
 * @apiSuccess {String} album.title  Title of the album.
 * @apiSuccess {String} album.spotify_id  The spotify's id of the album.
 * @apiSuccess {Date} album.release_date  The album release date.
 * @apiSuccess {String[]} album._songs An array with the ids of the album's songs.
 * @apiSuccess {String[]} album._artist An array with the ids of the album's performers.
 */
router.put('/:album_id', albumController.update);

/**
 * @api {delete} /album Delete an album record given the id.
 * @apiName DeleteAlbum
 * @apiGroup Album
 *
 * @apiParam {String} album_id The id of the album record.
 *
 * @apiSuccess {String} status A message indicating if the action was successful or not.
 * @apiSuccess {String} err Detailed information in case the action was not successful.
 */
router.delete('/:album_id', albumController.delete);

module.exports = router;
