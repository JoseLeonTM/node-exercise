
export function requestUpdate() {
    return {
        type: 'requestUpdate',
    }
}
export function receiveUpdate(res) {
    return {
        type: 'receiveUpdate',
        currencyData: res
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
