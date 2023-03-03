var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.getHeader("tiktok");
    res.write("Hello World\n");
    res.end("Hello World\n");
}).listen(8080);