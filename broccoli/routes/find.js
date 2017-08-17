'use strict';
var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function (req, res) {
    res.render('find', { title: 'Find new recipes' });
});

module.exports = router;