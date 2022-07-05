var http = require('http')
var log = require('./log.js')
var SayHello = require('./exportsDemo.js')

var data = JSON.stringify({name:'Berke',LastName:'Space'})
http.createServer(function(request,response){
    console.log(request.url)
    if(request.url=="/admin"){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<html><body><strong>Admin Page</strong></body></html> ')
    }else if(request.url=="/"){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<html><body><strong>Home Page</strong></body></html> ')
    }else if(request.url=="/customer"){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.write(data)

    }
    response.end('')
}).listen(8080)


log.information('Server Started at : ')
console.log(data)
console.log(SayHello())