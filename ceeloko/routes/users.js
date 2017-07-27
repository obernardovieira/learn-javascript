var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
    var myData = {status : 200, name : 'bernardo'}
    response.json(JSON.stringify(myData))
})

module.exports = router;
