"use strict";
const redux_1 = require("redux");
const currencyReducer_1 = require("./currencyReducer");
const historyReducer_1 = require("./historyReducer");
const Reducers = redux_1.combineReducers({
    curs: currencyReducer_1.default,
    hist: historyReducer_1.default
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Reducers;
