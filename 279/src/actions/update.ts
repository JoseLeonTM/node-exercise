
import { applyMiddleware } from 'redux';
import Reducers from '../reducers';

function requestUpdate() {
    // console.log("Update requested");
    return {
        type: 'requestUpdate',
    }
}
function receiveUpdate(res) {
    // console.log("Update received");
    return {
        type: 'receiveUpdate',
        currencyData: res,
        date: Date.now()
    }
}
function error(err) {
    console.log('Error', err);
    return {
        type: 'error',
        error: err
    }
}
export default function update() {
    // console.log("Update");
    return dispatch => {
        dispatch(requestUpdate());
        return fetch('https://openexchangerates.org/api/latest.json?app_id=ae78aed5df4c4e3091aae93aa6b381a5')
            .then(
            res => res.json(),
            err => console.log("Error: ",err)
            )
            .then(
                json => dispatch(receiveUpdate(json))
            )
    }
}
