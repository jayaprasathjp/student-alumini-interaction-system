const http=require('http')
http.createServer(function(req, res) {
res.writeHead(200,{'content-type':'text/html'});

res.end('hello world');
}).listen(4000);