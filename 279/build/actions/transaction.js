"use strict";
function Transaction(currency, amount, date) {
    return {
        type: 'transaction',
        amount: amount,
        currency: currency,
        date: date
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Transaction;
