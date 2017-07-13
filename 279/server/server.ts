
import * as http from 'http';
import * as express from 'express';
import * as path from 'path';
import * as request from 'request';

var app = express();

app.set('port', 3000);

app.use(express.static(path.join(__dirname, '../')));
app.get('/', function (req, res, next) {
    res.render('index.html');
});
///////CURRENCY TYPE//////
interface Currencies{
    disclaimer?: string
    license?: string
    timestamp?: Date
    prevDate? : Date
    base?: string
    rates?: {
        [key : string] : number
    }
}
///////HISTORY TYPE//////
interface History{
    [key : number] : [Date,string,number];
}
/////////STATE TYPE//////////
interface State {
    curs : Currencies;
    hist : History;
}
//////////STORED STATE//////////
var state : State ={ 
    curs : {},
    hist : []
}
///////FETCHES THE CURRENCIES///////
function update(res){
    request(
        'https://openexchangerates.org/api/latest.json?app_id=ae78aed5df4c4e3091aae93aa6b381a5',
        function(error,response,body){
            if(!error && response.statusCode == 200){
                state.curs = JSON.parse(body); 
                state.curs.timestamp = new Date(Date.now());             
                res.send(state.curs);
            }
        }
    );
}
/////CHECKS IF CURRENCIES ARE OLD//////
app.get('/update', function (req, res) {    
    let now = new Date(Date.now());
    if(state.curs.timestamp){
        let oldTime = state.curs.timestamp.getTime();
        let nowtime = now.getTime();
        let substract = nowtime - oldTime;
        console.log("Last update: ",(substract/60000).toFixed(1),"min");
        if(Math.abs(substract)<600000){
            res.send(state.curs);
        }
        else{
            update(res);
        }
    }
    else{
        update(res);
    }
});
app.listen('3000', function () {
    console.log("Listenning: ", app.get('port'));
});