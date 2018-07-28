var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var s = "Hello";
    res.send(s + ' World!' + s);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
