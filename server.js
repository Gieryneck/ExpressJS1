var express = require('express');
var app = express();


app.get('/', function(req, res) {
    console.log('Received GET request at "/".');
    res.send('Hello there!');
});

app.use('/store',function(req, res, next) { // middleware for "/store" endpoint only
    console.log('I\'m middleware for request at "/store".');
    next();
});

app.get('/store', function(req, res){

    console.log('Received GET request at "/store".');
    res.send('This is the store.');
});



var server = app.listen(3000, 'localhost', function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('App is listening at http://' + host + ':' + port); 
    //tutaj sami definiujemy port i adres, ale w prawdziwej aplikacji moglibyśmy tych wartości nie znać, dlatego wpisujemy zmiennymi
});


app.use(function (req, res, next) {
    res.status(404).send('Sorry, couldn\'t find what you were looking for.');
});

