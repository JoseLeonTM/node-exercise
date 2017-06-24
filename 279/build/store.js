"use strict";
const redux_1 = require("redux");
const reducers_1 = require("./reducers");
var store = redux_1.createStore(reducers_1.default);
console.log("State: ", store.getState());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = store;
// let unsubscribe = store.subscribe(()=>
// console.log(store.getState())
// );
// store.dispatch()
// unsubscribe();
