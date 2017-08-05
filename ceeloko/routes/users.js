var express = require('express');
var router = express.Router();
var multer = require('multer')
var upload = multer()

getuser = router.get('/:name', function (request, response) {
    var myData = {status : 200, name : request.params.name}
    response.json(JSON.stringify(myData))
})

postuser = router.post('/', upload.array(), function (request, response, next) {
    console.log(request.body)
    response.json(request.body)
});

deleteuser = router.delete('/:name', function (request, response) {
    console.log(request.params.name)
})

getallusers = router.get('/', function (request, response) {
    var myData = {status : 200, names : ['a', 'b']}
    response.json(JSON.stringify(myData))
})

module.exports = {
    getuser,
    postuser,
    deleteuser,
    getallusers
}
