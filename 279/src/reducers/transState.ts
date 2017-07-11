function getDate() {
    var now = new Date();
    var date = now.getDate() < 10 ?
        '0' + now.getDate() :
        now.getDate();
    var month = now.getMonth() < 10 ?
        '0' + (now.getMonth()+1) :
        (now.getMonth()+1);
    var year = now.getFullYear();        
    return year+'-'+month+'-'+date;
}
const initialState = {
    currency: "USD",
    amount: 0,
    concept: '',
    date: getDate()
}
function transState(state = initialState, action) {
    switch (action.type) {
        case 'changeTransValues': {
            return Object.assign({}, state, {
                [action.property]: action.value
            })
        }
        case 'clearTransValues': {
            return initialState;
        }
        default:
            return state;
    }
}
export default transState;
