var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://localhost/fidelidade');

var port = process.env.port || 3001;
http.createServer(app).listen(port, function() {
    console.log("Running in: http://localhost:" + port)
});
