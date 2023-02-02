console.log("welcome to the console of The Crack Way . . . ")
var http = require('http');

var server = http.createServer(function (req, res) {
    var ip = req.connection.remoteAddress;
    res.end("Votre adresse IP : " + ip);
});

server.listen(3000);
document.write(`${ip}`); // affichage de l'addresse IP 
// API time 
