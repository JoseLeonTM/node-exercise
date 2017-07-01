"use strict";
function Convert(from, amount, to) {
    return {
        type: 'convert',
        from: from,
        to: to,
        amount: amount
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Convert;
;
