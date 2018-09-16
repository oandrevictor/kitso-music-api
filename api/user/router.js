var express = require('express');
var router = express.Router();

var userController = require('./controller');

router.get('/', userController.index);

router.get('/query', userController.findby);

router.get('/:user_id', userController.show);

router.post('/', userController.create);

router.post('/email', userController.findByEmail);

router.post('/password', userController.updatePassword);

router.put('/:user_id', userController.update);

router.post('/delete/:user_id', userController.delete);

module.exports = router;
