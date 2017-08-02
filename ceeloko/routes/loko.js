var express = require('express');
var router = express.Router();

method = router.get('/', function (request, response) {
    var myData = {status : 200, loko : 'bridges'}
    response.json(JSON.stringify(myData))
})
otherMethod = function() {}

module.exports = {
    method,
    otherMethod
}
