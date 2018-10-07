var express = require('express');
var router = express.Router();

var listenedController = require('./controller');

router.get('/', listenedController.index);

router.post('/', listenedController.create);

router.get('/:listened_id', listenedController.show);

router.put('/:listened_id', listenedController.update);

router.delete('/:listened_id', listenedController.delete);

module.exports = router;
