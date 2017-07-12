
// import { applyMiddleware } from 'redux';
// import Reducers from '../reducers';

function requestUpdate() {
    return {
        type: 'requestUpdate',
    }
}
function receiveUpdate(res) {
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
    return dispatch => {
        dispatch(requestUpdate());
        return fetch('http://localhost:3000/update')
            .then(
            res => res.json(),
            err => console.log("Error: ", err)
            )
            .then(
            json => dispatch(receiveUpdate(json))
            ) 
    }
}
