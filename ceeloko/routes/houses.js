var express = require('express');
var router = express.Router();


gethouse = router.get('/:house', function (request, response) {
    //
})

posthouse = router.post('/:house', function (request, response) {
    //
})

deletehouse = router.delete('/:house', function (request, response) {
    //
})

renthouse = router.post('/:house', function (request, response) {
    //
})

unrenthouse = router.post('/:house', function (request, response) {
    //
})

getallhouses = router.get('/all', function (request, response) {
    //
})

module.exports = {
    gethouse,
    posthouse,
    deletehouse,
    renthouse,
    unrenthouse,
    getallhouses
}
