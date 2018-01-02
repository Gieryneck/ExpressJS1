var express = require('express');
var app = express();
app.use(express.static('assets'));


app.get('/', function(req, res) {
    console.log('Received GET request at "/".');
    res.sendFile('/index.html');
});


app.get('/userform', function(req, res) {
    console.log('Received GET request at "/userform".');
    const response = {

        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response)); // zakoncz odpowiedz, ale jeszcze przetworz const response na jsonowy string
    /* 
    res.write('<h1>It works!</h1>', 'utf8');
    res.end();

    is equivalent to

    res.end('<h1>It works!</h1>', 'utf8');
     */
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