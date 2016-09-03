var express = require('express');
var router = express.Router();

/* page router */
router.get('/', function(req, res, next) {
	res.redirect('/views/index.html');
});

module.exports = router;
