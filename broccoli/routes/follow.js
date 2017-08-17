'use strict';
var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function (req, res) {
    res.render('follow', { title: 'See who you are following' });
});

module.exports = router;