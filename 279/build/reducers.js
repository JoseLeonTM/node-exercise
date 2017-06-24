"use strict";
function update() {
    var currencies;
    fetch('https://openexchangerates.org/api/latest.json?app_id=ae78aed5df4c4e3091aae93aa6b381a5')
        .then((response) => response.json())
        .then((response) => {
        currencies = response;
    });
    return currencies;
}
const initialState = {
    curs: update(),
    hist: {}
};
function reducer(state = initialState, action) {
    console.log("Action: ", action);
    switch (action.type) {
        case 'update': {
            return Object.assign({}, state.hist, update());
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
