var request = require('request');

function goFetch() {
    request(
        'https://localhost:3000/update',
        function(error,response,body){
            if(!error && response.statusCode == 200){
                console.log("body: ",body);                                 
            }
        }
    );
}
describe('Server tests', function () {
    it("Should receive the currencies", function () {
        expect(goFetch()).toBeDefined();
    })
})