'use strict';
require('dotenv').config()
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var url = process.env.MONGODB_URL;

router.get('/', function (req, res)
{
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var collection = db.collection('accounts');
        collection.find({
            "personal.username": req.cookies.uname
        }).toArray(function (err, docs) {

            console.log(docs);

            res.render('recipes',
            {
                title: 'Your recipes',
                username: req.cookies.uname,
                recipes: docs[0].recipes
            });
        });
    });
});

router.post('/new', function (req, res) {

});

router.get('/new', function (req, res) {
    res.render('recipes',
        {
            title: 'Create a new recipe',
            new_recipe: true
        });
});

module.exports = router;