"use strict";
const redux_1 = require("redux");
const currencyReducer_1 = require("./currencyReducer");
const convState_1 = require("./convState");
const transReducer_1 = require("./transReducer");
const transState_1 = require("./transState");
const histState_1 = require("./histState");
const Reducers = redux_1.combineReducers({
    curs: currencyReducer_1.default,
    hist: transReducer_1.default,
    convState: convState_1.default,
    transState: transState_1.default,
    histState: histState_1.default
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Reducers;
//# sourceMappingURL=index.js.map