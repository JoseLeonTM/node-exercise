"use strict";
const update_1 = require("./update");
const convert_1 = require("./convert");
const transaction_1 = require("./transaction");
const history_1 = require("./history");
const Actions = {
    Update: update_1.default,
    Convert: convert_1.default,
    changeConvValues: convert_1.changeConvValues,
    clearConvValues: convert_1.clearConvValues,
    Transaction: transaction_1.default,
    changeTransValues: transaction_1.changeTransValues,
    clearTransValues: transaction_1.clearTransValues,
    histChange: history_1.default
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Actions;
//# sourceMappingURL=index.js.map