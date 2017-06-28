
import * as http from 'http';
import * as express from 'express';
import * as path from 'path';
var app = express();

app.set('port', 3000);

app.use(express.static(path.join(__dirname,'../')));
app.get('/',function(req,res,next){
    res.render('index.html');
});
app.listen('3000',function(){
    console.log("Listenning: ",app.get('port'));
});
