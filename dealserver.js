var express = require('express');
var cors = require('cors');
var app = express();
var product = require('/Users/Monika/Documents/GitHub/camry/product.json');

app.use(cors());

app.get('/product', function(req, res) {
    res.send(product);
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})  