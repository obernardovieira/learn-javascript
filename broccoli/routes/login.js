'use strict';
require('dotenv').config()
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var url = process.env.MONGODB_URL;

router.get('/', function (req, res) {
    res.render('login', { title: 'Authentication' });
});

router.post('/', function (req, res) {
    console.log(req.body);

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var collection = db.collection('accounts');
        collection.find({
            "personal": {
                "username": req.body["username"],
                "password": req.body["password"]
            }
        }).toArray(function (err, docs) {
            assert.equal(err, null);

            if (docs.length > 0) {
                db.close();
                res.cookie('uname', req.body["username"], { expires: new Date(Date.now() + 900000) });
                return res.redirect('/profile');
            }
            else {
                res.render('login', { title: 'Authentication' });
            }
        });
    });
});

module.exports = router;