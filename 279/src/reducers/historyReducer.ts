
function history(state = [], action) {    
    switch (action.type) {
        case 'addTransaction': {
            console.log("Adding a transaction");
            var amount = action.amount,
                concept = action.concept,
                currency = action.currency,
                date = action.date;
            var payment = [date,concept,amount, currency];
            return [...state, payment];
        }
        default:
            return state;
    }
}
export default history;
