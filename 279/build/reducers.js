"use strict";
const actions_1 = require("./actions");
// function update(){
//     return fetch('https://openexchangerates.org/api/latest.json?app_id=ae78aed5df4c4e3091aae93aa6b381a5')
//     .then((response)=> response.json())
//     .then((response)=>{
//         return response;
//     })
// }
const initialState = {
    curs: actions_1.update(),
    hist: {}
};
function reducer(state = initialState, action) {
    console.log("Action: ", action);
    switch (action.type) {
        case 'update': {
            return Object.assign({}, state, action.currencies);
        }
        case 'convert': {
            var from = action.from, amount = action.amount, to = action.to;
            return state;
        }
        case 'spend': {
            var amount = action.amount, currency = action.currency, date = action.date;
            var payment = [date, amount, currency];
            return Object.assign({}, payment);
        }
        default: return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducer;
