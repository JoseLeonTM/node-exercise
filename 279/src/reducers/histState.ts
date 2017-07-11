
function histState(state = {cur:'USD'}, action) {
    switch (action.type) {
        case 'changeCurrency': {
            return Object.assign({}, {
                cur: action.cur
            })
        }        
        default:
            return state;
    }
}
export default histState;
