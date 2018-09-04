var express = require('express');
var app = express();
var serv = require('http').Server(app);
 
app.get('/',function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use(express.static(__dirname + '/client', {
    extensions: ['html', 'htm']
    // Other options here
}));
 
serv.listen(2000);
console.log("Server started.");