const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var users = require('./routes/users')
var loko = require('./routes/loko')
app.use('/user', users)
app.use('/loko', loko.method)
app.use(function(request, response, next) {
    var myData = {status : 404}
    response.json(JSON.stringify(myData))
})

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!')
})