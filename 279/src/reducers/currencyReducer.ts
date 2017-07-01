

function currencies(state={rates:{},date:Date.now()},action) {
    console.log("Updating currencies...");
    switch(action.type){
        case 'update':{
            return {
                rates : action.currencies,
                date : action.date
            };
        }
        default:
            return state;
    }
}
export default currencies;
