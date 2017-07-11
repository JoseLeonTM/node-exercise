

function currencies(state={currencyData:{},date:Date.now(), isRequesting:false},action) {
    switch(action.type){
        case 'receiveUpdate':{
            // console.log("New currencies received");
            return {
                currencyData : action.currencyData,
                date : action.date,
                isRequesting : false
            };
        }
        case 'requestUpdate':{
            return Object.assign({},state,{
                isRequesting : true
            })
        }
        default:{
            return state;
        }
    }
}
export default currencies;
