"use strict";
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const reducers_1 = require("../reducers");
function requestUpdate(url) {
    return {
        type: 'requestUpdateCurrencies',
        url
    };
}
function receiveUpdate(res) {
    console.log("receiveUpdate: ", res);
    return {
        type: 'update',
        currencies: res,
        date: Date.now()
    };
}
function error(err) {
    console.log('Error', err);
    return {
        type: 'error',
        error: err
    };
}
function getContent() {
    return fetch('https://openexchangerates.org/api/latest.json?app_id=ae78aed5df4c4e3091aae93aa6b381a5');
}
const store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(redux_thunk_1.default));
function thunkUpdate() {
    return function (dispatch) {
        //fssd
        return getContent().then(res => dispatch(receiveUpdate(res)), err => dispatch(error(err)));
    };
}
function Update() {
    store.dispatch(thunkUpdate);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Update;
