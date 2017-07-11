"use strict";
const express = require("express");
const path = require("path");
var app = express();
app.set('port', 3000);
app.use(express.static(path.join(__dirname, '../')));
app.get('/', function (req, res, next) {
    res.render('index.html');
});
app.get('/converter', function (req, res) {
    res.render('<h1>Hello, world!</h1>');
});
var curs = {};
app.get('/update', function (req, res) {
    console.log("This is where we update");
    curs = new XMLHttpRequest().open('GET', 'https://openexchangerates.org/api/latest.json?app_id=ae78aed5df4c4e3091aae93aa6b381a5', true);
    res.send(curs);
});
app.listen('3000', function () {
    console.log("Listenning: ", app.get('port'));
});
//# sourceMappingURL=server.js.map