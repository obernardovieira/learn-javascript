const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var users = require('./routes/users')
app.use('/users', users)
app.use(function(request, response, next) {
    var myData = {status : 404}
    response.json(JSON.stringify(myData))
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})