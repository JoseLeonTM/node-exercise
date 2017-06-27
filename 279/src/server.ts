
import * as http from 'http';
// import * as util from 'util';
import * as express from 'express';
import * as path from 'path';
var app = express();
// var router = express.router();


app.set('port', 3000);
// app.get('/',function(req,res){  
    // console.log("PATH: "+path.join(__dirname,'index.html'));
    // res.render('index.html',function(err,html){
    //     res.send(html);
    // });
// });

app.engine('html',require('ejs').renderFile);
app.set('views',__dirname);
app.get('/',function(req,res,next){
    res.render('index');
});
app.listen('3000',function(){
    console.log("Listenning: ",app.get('port'));
});

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })
