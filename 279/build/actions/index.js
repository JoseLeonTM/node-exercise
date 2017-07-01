"use strict";
const update_1 = require("./update");
const convert_1 = require("./convert");
const transaction_1 = require("./transaction");
console.log("update: ", update_1.default);
const Actions = {
    Update: update_1.default,
    Convert: convert_1.default,
    Transaction: transaction_1.default
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Actions;
