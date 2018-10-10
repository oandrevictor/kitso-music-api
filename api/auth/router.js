var express = require('express');
var router = express.Router();

var authController = require('./controller');

/**
 * @api {get} /auth Get information for the current logged user (if there's one)
 * @apiName GetAuth
 * @apiGroup Auth
 *
 * @apiSuccess {String} status True if there's an user authenticated, false otherwise.
 * @apiSuccess {Json} user Authenticated user information (if there's an user authenticated).
 */
router.get('/', authController.status);

/**
 * @api {delete} /auth Logout
 * @apiName DeleteAuth
 * @apiGroup Auth
 *
 * @apiSuccess {String} status A message indicating that the user was logged out.
 */
router.delete('/', authController.logout);

/**
 * @api {post} /auth Login
 * @apiName PostAuth
 * @apiGroup Auth
 *
 * @apiParam {String} username The user's identification.
 * @apiParam {Password} Password The user's password.
 *
 * @apiSuccess {String} status A message indicating if the login was successful or not.
 * @apiSuccess {String} err Detailed information if the login authentication was not successful.

 */
router.post('/', authController.login);

module.exports = router;
