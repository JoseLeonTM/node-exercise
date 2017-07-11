"use strict";
function requestUpdate() {
    // console.log("Update requested");
    return {
        type: 'requestUpdate',
    };
}
function receiveUpdate(res) {
    return {
        type: 'receiveUpdate',
        currencyData: res,
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
function update() {
    return dispatch => {
        dispatch(requestUpdate());
        return fetch('http://localhost:3000/update')
            .then(res => res.json(), err => console.log("Error: ", err))
            .then(json => dispatch(receiveUpdate(json)));
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = update;
//# sourceMappingURL=update.js.map