var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('gatos', { titulo: 'Gatos page' });
});

module.exports = router;
