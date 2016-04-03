var express = require('express');
var app = express();
var scrape = require('./scrape/scraper.js');



var bodyParser = require('body-parser');
var router = express.Router();


// needed middleware for accepting post json objected from index.html
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());


// middle ware to solve the access-controll-allow-origin issue with the api
app.use(function(req, res, next) { 
    res.header('Access-Control-Allow-Origin', "*"); 
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type'); 
    next();
});


// all requests to server will server all files in the /public folder to the broswer
app.use(express.static('public'));

app.post('/scrape', function (req, res) {
  res.send("Hello is there anybody out there?");
  console.log(req.body);
});



// tells server to listen to port 8081 im not sure if its 100% necessary
app.listen('8081');
console.log('Magic happens on port 8081 https://content-editing-app-posth.c9users.io/');

//exports app if need been can be accessed elsewhere with var app = require('/server.js')
exports = module.exports = app;