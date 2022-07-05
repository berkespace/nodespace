var express = require('express')
var app = express()


app.get('/', function (request, response) {
    response.send('Hello Express.js')
});
app.get('/admin', function (request, response) {
    response.send('Admin')
});

app.get('/product', function (request, response) {
    console.log('ID:'+ request.query.id)
    console.log('Category ID : '+ request.query.categoryid) 
    response.send('Products')
});

app.post('/product', function (request, response) {
    console.log(request.body)
    response.send('Post request sent')
});

app.delete('/product', function (request, response) {
    response.send('Delete request sent')
});


var server = app.listen(8080);