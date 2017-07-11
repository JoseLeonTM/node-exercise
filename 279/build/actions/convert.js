"use strict";
function Convert(from, amount, to) {
    return {
        type: 'result',
        from,
        amount,
        to
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Convert;
;
function changeConvValues(property, value) {
    return {
        type: 'changeConvValues',
        property,
        value
    };
}
exports.changeConvValues = changeConvValues;
function clearConvValues() {
    return {
        type: 'clearConvValues'
    };
}
exports.clearConvValues = clearConvValues;
//# sourceMappingURL=convert.js.map