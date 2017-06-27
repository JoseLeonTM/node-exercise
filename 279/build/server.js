"use strict";
// import * as util from 'util';
const express = require("express");
var app = express();
// var router = express.router();
app.set('port', 3000);
// app.get('/',function(req,res){  
// console.log("PATH: "+path.join(__dirname,'index.html'));
// res.render('index.html',function(err,html){
//     res.send(html);
// });
// });
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile());
app.set('views', __dirname);
app.get('/', function (req, res, next) {
    res.render('index');
});
app.listen('3000', function () {
    console.log("Listenning: ", app.get('port'));
});
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })
