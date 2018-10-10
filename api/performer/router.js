var express = require('express');
var router = express.Router();

var performerController = require('./controller');

var ensureAuthenticated = function(req, res, next){
  if (!req.isAuthenticated())
    res.sendStatus(401);
  else
    next();
};


/**
 * @apiDefine PerformerParams
 * @apiParam {String} spotify_id The spotify id of the performer.
 * @apiParam {Array} _people An array with the id of the people that are part of the associated entity, unless it's a band it will be a single entry array.
 * @apiParam {Array} _albuns An array with the ids of the performer's albuns.
 * @apiParam {Array} _albuns An array with the ids of the albuns in which the song is contained.
 * @apiParam {String} name Name of the performer, used in case it's a band or the person uses an alias.
 * @apiParam {Array} _videos An array with the id of the song's composers.
 * @apiParam {Number} duration_ms The duration of the song in milliseconds.
 *
 * @apiParam {Date} release_date Release date of the song.
 * @apiParam {Boolean} is_explicit If the song contains or not explicit language.
 */


/**
 * @api {get} /performer Get Information from multiple performers given some criteria
 * @apiName GetPerformer
 * @apiGroup Performer
 *
 * @apiUse PerformerParams
 *
 */
router.get('/', performerController.index);

/**
 * @api {get} /performer Get Information from a performers given the id.
 * @apiName GetPerformer
 * @apiGroup Performer
 *
 * @apiParam {String} performer_id The id of the performer.
 *
 */
router.get('/:performer_id', performerController.show);

/**
 * @api {post} /performer Create a performer
 * @apiName PostPerformer
 * @apiGroup Performer
 *
 * @apiUse PerformerParams
 *
 */
router.post('/', performerController.create);

/**
 * @api {put} /performer Update the information for a performer, given its id.
 * @apiName PutPerformer
 * @apiGroup Performer
 *
 * @apiParam {String} performer_id The id of the performer.
 * @apiUse PerformerParams
 *
 */
router.put('/:performer_id', performerController.update);

/**
 * @api {delete} /performer Delete a performer given the id.
 * @apiName DeletePerformer
 * @apiGroup Performer
 *
 * @apiParam {String} performer_id The id of the performer.
 *
 */
router.delete('/:performer_id', performerController.delete);

module.exports = router;
