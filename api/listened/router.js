var express = require('express');
var router = express.Router();

var listenedController = require('./controller');

/**
 * @apiDefine ListenedParams
 * @apiParam {String} _song The id of the user related to the listened activity.
 * @apiParam {String} _song The id of the listened song.
 * @apiParam {Date} date The date when the listened activity happened.
 * @apiParam {Boolean} hidden If the activity is privated and should be hidden from other users.
 */


/**
 * @api {get} /listened Get Information from multiple listeneds given some criteria
 * @apiName GetListened
 * @apiGroup Listened
 *
 * @apiUse ListenedParams
 *
 */
router.get('/', listenedController.index);

/**
 * @api {post} /listened Create a listen activity
 * @apiName PostListened
 * @apiGroup Listened
 *
 * @apiUse ListenedParams
 *
 */
router.post('/', listenedController.create);

/**
 * @api {get} /listened Get Information from a listen activity given the id.
 * @apiName GetListened
 * @apiGroup Listened
 *
 * @apiParam {String} listened_id The id of the listen activity.
 *
 */
router.get('/:listened_id', listenedController.show);

/**
 * @api {put} /listened Update the information for a listen activity, given its id.
 * @apiName PutListened
 * @apiGroup Listened
 *
 * @apiParam {String} listened_id The id of the listen activity.
 * @apiUse ListenedParams
 *
 */
router.put('/:listened_id', listenedController.update);

/**
 * @api {delete} /listened Delete a listen activity given the id.
 * @apiName DeleteListened
 * @apiGroup Listened
 *
 * @apiParam {String} listened_id The id of the listen activity.
 *
 */
router.delete('/:listened_id', listenedController.delete);

module.exports = router;
