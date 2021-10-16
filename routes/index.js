var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({root: 'Error'});
});

router.post('/signin', function(req, res, next) {
  let auth = null;
  if(req.body.username == 'sayersm' && req.body.password == 'password'){
    auth = true;
  } else {
    auth = false;
  }
  console.log(auth, req.body);
  res.json([{ signin: auth }]);
});

router.post('/signout', function(req, res, next) {
  res.send({ signout: 'true' });
});

module.exports = router;
