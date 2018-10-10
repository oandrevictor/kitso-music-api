var express = require('express');
var router = express.Router();

var userController = require('./controller');

var ensureAuthenticated = function(req, res, next){
  if (!req.isAuthenticated())
    res.sendStatus(401);
  else
    next();
};

/**
 * @apiDefine UserParams
 * @apiParam {String} username An unique identifier for the user.
 * @apiParam {String} name User full name.
 * @apiParam {String} email User's email address.
 * @apiParam {String} password User's password.
 * @apiParam {Date} birthday User's birthday.
 * @apiParam {String} gender User's gender (either: male, female or other)
 * @apiParam {String} description User self description (aka bio)
  */


/**
 * @api {get} /user Get Information from multiple users given some criteria
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiUse UserParams
 *
 */
router.get('/', userController.index);

/**
 * @api {get} /user Get Information from an user given the id
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {String} user_id The id of the user.
 *
 */
router.get('/:user_id', userController.show);


/**
 * @api {post} /user Create an user
 * @apiName PostUser
 * @apiGroup User
 *
 * @apiUse UserParams
 *
 */
router.post('/', userController.create);

router.post('/email', userController.findByEmail);

router.post('/password', ensureAuthenticated, userController.updatePassword);


/**
 * @api {put} /user Update the information of a user, given its id
 * @apiName PutUser
 * @apiGroup User
 *
 * @apiParam {String} user_id The id of the user.
 * @apiUse UserParams
 *
 */
router.put('/:user_id', ensureAuthenticated, userController.update);

/**
 * @api {post} /delete/user_id Delete an user given an id
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {String} user_id The id of the user to be deleted.
 *
 */
router.delete('/:user_id', userController.delete);



module.exports = router;
