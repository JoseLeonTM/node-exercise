"use strict";
function history(state = [], action) {
    console.log("Adding a transaction...");
    switch (action.type) {
        case 'history': {
            var amount = action.amount, currency = action.currency, date = action.date;
            var payment = [date, amount, currency];
            return [...state, payment];
        }
        default:
            return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = history;
