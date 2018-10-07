var express = require('express');
var router = express.Router();

var userController = require('./controller');

var ensureAuthenticated = function(req, res, next){
  if (!req.isAuthenticated())
    res.sendStatus(401);
  else
    next();
};

router.get('/', userController.index);

router.get('/query', userController.findby);

router.get('/:user_id', userController.show);

router.post('/', userController.create);

router.post('/email', userController.findByEmail);

router.post('/password', ensureAuthenticated, userController.updatePassword);

router.put('/:user_id', ensureAuthenticated, userController.update);

router.post('/delete/:user_id', ensureAuthenticated, userController.delete);



module.exports = router;
