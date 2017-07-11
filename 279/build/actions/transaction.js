"use strict";
function Transaction(date, concept, amount, cur) {
    return {
        type: 'addTransaction',
        amount,
        concept,
        date,
        cur
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Transaction;
function changeTransValues(property, value) {
    return {
        type: 'changeTransValues',
        property,
        value
    };
}
exports.changeTransValues = changeTransValues;
function clearTransValues() {
    return {
        type: 'clearTransValues'
    };
}
exports.clearTransValues = clearTransValues;
//# sourceMappingURL=transaction.js.map