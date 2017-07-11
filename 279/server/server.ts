
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
app.get('/converter', function (req, res) {
    res.render('<h1>Hello, world!</h1>');
});
var curs = {};
// var curs = {
//     "disclaimer": "Usage subject to terms: https://openexchangerates.org/terms",
//     "license": "https://openexchangerates.org/license",
//     "timestamp": 1499702400,
//     "base": "USD",
//     "rates": {
//         "BBD": 2,
//         "BDT": 81.470171,
//         "BGN": 1.717114,
//         "BHD": 0.37728,
//         "BIF": 1725.25,
//         "BMD": 1,
//         "BSD": 1,
//         "BTC": 0.000414691268,
//         "CUC": 1,
//         "CUP": 25.5,
//         "CVE": 96.75,
//         "CZK": 22.900224,
//         "GMD": 46,
//         "GNF": 9000,
//         "GTQ": 7.329613,
//         "MXN": 17.983884,
//         "USD": 1,
//         "ZMW": 9.03,
//         "ZWL": 322.322775
//     }
}
app.get('/update', function (req, res) {
    console.log("This is where we update");
    curs = new XMLHttpRequest().open(
        'GET',
        'https://openexchangerates.org/api/latest.json?app_id=ae78aed5df4c4e3091aae93aa6b381a5',
        true
        );        
    res.send(curs);
});

app.listen('3000', function () {
    console.log("Listenning: ", app.get('port'));
});
