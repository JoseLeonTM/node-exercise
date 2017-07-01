
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reducers';

function requestUpdate(url) {
    return {
        type: 'requestUpdateCurrencies',
        url
    }
}

function receiveUpdate(res) {
    console.log("receiveUpdate: ", res);
    return {
        type: 'update',
        currencies: res,
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
function getContent() {
    return fetch('https://openexchangerates.org/api/latest.json?app_id=ae78aed5df4c4e3091aae93aa6b381a5');
}
const store = createStore(
    Reducers,
    applyMiddleware(thunk)
);
function thunkUpdate() {
    return function (dispatch) {
        //fssd
        return getContent().then(
            res => dispatch(receiveUpdate(res)),
            err => dispatch(error(err))
        )
    }
}

export default function Update(){
    store.dispatch(thunkUpdate);
}