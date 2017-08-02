var express = require('express');
var router = express.Router();

router.get('/:name', function (request, response) {
    var myData = {status : 200, name : request.params.name}
    response.json(JSON.stringify(myData))
})

module.exports = router;
