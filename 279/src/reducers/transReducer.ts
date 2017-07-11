
function history(state = [], action) {
    switch (action.type) {
        case 'addTransaction': {
            var amount = ((action.amount) / action.cur),
                concept = action.concept,  
                date = action.date;
            var payment = [date, concept, amount];
            return [...state, payment];
        }
        default:
            return state;
    }
}
export default history;
