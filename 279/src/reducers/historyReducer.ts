
function history(state = [], action) {
    console.log("Adding a transaction...");
    switch (action.type) {
        case 'history': {
            var amount = action.amount,
                currency = action.currency,
                date = action.date;
            var payment = [date, amount, currency];
            return [...state, payment];
        }
        default:
            return state;
    }
}
export default history;