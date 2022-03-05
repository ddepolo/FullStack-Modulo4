var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('perros', { titulo: 'Perros page' });
});

module.exports = router;
