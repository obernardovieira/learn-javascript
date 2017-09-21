require('dotenv').config()

const MongoClient = require('mongodb').MongoClient
const mongo_url = 'mongodb://' +
    process.env.MONGO_USERNAME + ':' +
    process.env.MONGO_PASSWORD + '@localhost:27017/' +
    process.env.MONGO_DATABASE

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var server
var database

//const fs = require('fs')
const Log = require('log')
const log = new Log('info'/*, fs.createWriteStream('my.log')*/)

var bodyParser = require('body-parser')

var multer = require('multer')
var upload = multer()

MongoClient.connect(mongo_url, function(error, db) {
    if(error == null && db != null) {
        log.info('Login with success!')
        database = db
        console.log('lo')
    }
    else {
        log.error('Error connecting to database!')
        server.close()
    }
})

console.log('se')

var users = require('./routes/users')(database)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', users.getuser, users.deleteuser)
app.use('/users', users.getallusers)
app.post('/my', upload.array(), function (request, response, next) {
    console.log(request.body)
    database.collection('users').insert({name : 'ab', pass : '12'})
    response.json(request.body)
})

app.use(function(request, response, next) {
    var myData = {status : 404}
    response.json(JSON.stringify(myData))
})

server = app.listen(port, function () {
    log.info('Example app listening on port ' + port + '!')
})