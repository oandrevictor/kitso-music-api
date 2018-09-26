var express = require('express');
var router = express.Router();

var authController = require('./controller');

router.get('/status', authController.status);

router.get('/logout', authController.logout);

router.post('/login', authController.login);

module.exports = router;
