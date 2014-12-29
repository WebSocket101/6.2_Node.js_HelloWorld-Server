var http = require('http');

http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end("Hallo Welt!\n");
}).listen(4000);

console.log("Der Server ist erreichbar unter http://127.0.0.1:4000");