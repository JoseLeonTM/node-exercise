"use strict";
// import constants from './constant';
function update() {
    return {
        type: 'update'
    };
}
exports.update = update;
function convert(from, amount, to) {
    return {
        type: 'convert',
        from: from,
        to: to,
        amount: amount
    };
}
exports.convert = convert;
;
function spend(currency, amount, date) {
    return {
        type: 'spend',
        amount: amount,
        currency: currency,
        date: date
    };
}
exports.spend = spend;
