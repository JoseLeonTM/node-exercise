
import * as http from 'http';
// import * as util from 'util';
import * as express from 'express';
import * as path from 'path';
var app = express();

// app.set('port', process.env.PORT || 3000);

app.get('/',function(req,res){  
    console.log(path.join(__dirname,'index.html'));
    res.redirect(path.join(__dirname,'index.html'));
    // res.send('pinche fidel joto');
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

