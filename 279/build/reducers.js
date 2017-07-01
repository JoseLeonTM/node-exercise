"use strict";
const actions_1 = require("./actions");
const initialState = {
    curs: actions_1.update(),
    hist: [],
    sel: String
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
            var newState = Object.assign({}, state);
            newState.hist.push(payment);
            return newState;
        }
        default: return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducer;
