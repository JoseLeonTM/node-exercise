import * as request from 'request';


function goFetch(){
    return (request(
        'https://openexchangerates.org/api/latest.json?app_id=ae78aed5df4c4e3091aae93aa6b381a5',
        function(error,response,body){
            if(!error && response.statusCode == 200){
                var res = JSON.parse(body); 
                res.timestamp = new Date(Date.now());             
                return res;
            }
        }
    ));
}

test('Request the currencies',()=>{
    var data = goFetch();
    // console.log(data);
    expect(data).toBeDefined();
});