var express = require('express');
var router = express.Router();

var lyricsController = require('./controller');

var ensureAuthenticated = function(req, res, next){
  if (!req.isAuthenticated())
    res.sendStatus(401);
  else
    next();
};

router.get('/', lyricsController.index);

router.post('/', ensureAuthenticated, lyricsController.create);

router.get('/:lyrics_id', lyricsController.show);

router.put('/:lyrics_id', ensureAuthenticated, lyricsController.update);

router.delete('/:lyrics_id', ensureAuthenticated, lyricsController.delete);

module.exports = router;
