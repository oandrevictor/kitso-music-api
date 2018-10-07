var express = require('express');
var router = express.Router();

var authController = require('./controller');

router.get('/', authController.status);

router.delete('/', authController.logout);

router.post('/', authController.login);

module.exports = router;
