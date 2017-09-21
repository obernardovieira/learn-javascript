var express = require('express');
var router = express.Router();
var multer = require('multer')
var upload = multer()

function getUser() {
    return router.get('/:name', function (request, response) {
        var myData = {status : 200, name : request.params.name}
        response.json(JSON.stringify(myData))
    })
}

function postUser(database) {
    return router.post('/', upload.array(), function (request, response, next) {
        console.log(request.body)
        
        response.json(request.body)
    })
}

function deleteUser() {
    return router.delete('/:name', function (request, response) {
        console.log(request.params.name)
    })
}

function getAllUsers() {
    return router.get('/', function (request, response) {
        var myData = {status : 200, names : ['a', 'b']}
        response.json(JSON.stringify(myData))
    })
}

module.exports = function(database) {
    return {
        getuser: getUser(),
        postuser: postUser(database),
        deleteuser: deleteUser(),
        getallusers: getAllUsers(),
    }
}