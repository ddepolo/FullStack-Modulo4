var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var resp = req.session.respuesta;
  console.log('test: '+req.session.respuesta)
  res.render('index', { title: 'Ingrese el numero Pi en 13 caracteres.' });
  //console.log(resp);
});



module.exports = router;
