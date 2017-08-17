'use strict';
require('dotenv').config()
var express         = require('express');
var router          = express.Router();
var MongoClient     = require('mongodb').MongoClient
var assert          = require('assert');
var url             = process.env.MONGODB_URL;


router.get('/', function (req, res) {

    if (req.cookies.uname != undefined)
    {
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);

            var collection = db.collection('accounts');
            collection.find({
                "personal.username": req.cookies.uname
            }).toArray(function (err, docs) {
                
                console.log(docs);

                res.render('profile',
                    {
                        title: 'Your profile',
                        username: req.cookies.uname,
                        recipes: docs[0].recipes
                    });
            });
        });
    }
    else
    {
        return res.redirect('/login');
    }
});

module.exports = router;