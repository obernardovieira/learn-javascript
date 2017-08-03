require('dotenv').config()

const MongoClient = require('mongodb').MongoClient
const mongo_url = 'mongodb://' +
    process.env.MONGO_USERNAME + ':' +
    process.env.MONGO_PASSWORD + '@localhost:27017/' +
    process.env.MONGO_DATABASE

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var server;

//const fs = require('fs')
const Log = require('log')
const log = new Log('info'/*, fs.createWriteStream('my.log')*/)


var users = require('./routes/users')
var loko = require('./routes/loko')

app.use('/user', users)
app.use('/loko', loko.method)
app.use(function(request, response, next) {
    var myData = {status : 404}
    response.json(JSON.stringify(myData))
})


MongoClient.connect(mongo_url, function(error, database) {
    if(error == null && database != null) {
        log.info('Login with success!')
    }
    else {
        log.error('Error connecting to database!')
        server.close()
    }
})


server = app.listen(port, function () {
    log.info('Example app listening on port ' + port + '!')
})