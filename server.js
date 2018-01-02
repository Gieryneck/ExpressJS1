var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var stringifyFile;

app.use(bodyParser.json()); // to pozwoli wykorzystać body-parser (middleware)


var read = function(req, res) {
    fs.readFile('./test.json', 'utf-8', function(err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(stringifyFile);
    });
}

app.get('/getNote', function(req, res) {
    console.log('Received GET request at "/getNote".');
    read(req, res);
});



app.post('/updateNote/:note', function(req, res) {
    console.log('Received POST request at "/updateNote/:note".');

    stringifyFile += JSON.stringify(req.params.note);
    
    fs.writeFile('./test.json', stringifyFile, function(err) {

        if (err) throw err;
        console.log('file updated!');
        res.send(stringifyFile);
    });

    /* writeFile(). Asynchronously writes data to a file, replacing the file if it already exists.
    data can be a string or a buffer.
    The encoding option is ignored if data is a buffer. 
    It defaults to 'utf8'. */
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Couldn\'t find what you\'re looking for.')
});