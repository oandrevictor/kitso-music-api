var express = require('express');
var router = express.Router();

var albumController = require('./controller');

router.get('/', albumController.index);

router.post('/', albumController.create);

router.get('/:album_id', albumController.show);

router.put('/:album_id', albumController.update);

router.delete('/:album_id', albumController.delete);

module.exports = router;
