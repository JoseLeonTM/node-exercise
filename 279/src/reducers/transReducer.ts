
function history(state = [], action) {
    switch (action.type) {
        case 'addTransaction': {
            var amount = ((action.amount) / action.cur),
                concept = action.concept,  
                displayDate = action.date,
                date = new Date(Date.now());
                let [year,month,day] = displayDate.split('-');
                date.setFullYear(year);
                date.setMonth(month);
                date.setDate(day);                
            var payment = [date,displayDate, concept, amount];
            return [...state, payment];
        }
        default:
            return state;
    }
}
export default history;
