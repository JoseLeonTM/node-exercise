

import {convert,spend,update} from './actions';

const initialState={
    curs: update(),
    hist:[],
    sel:String
}

function reducer(state=initialState,action){  
    console.log("Action: ",action);  
    switch(action.type){
        case 'update':{                       
            return Object.assign({},state,action.currencies);
        }
        case 'convert':{
            var from = action.from,
                amount= action.amount,
                to = action.to;            
            return state;
        }
        case 'spend':{
            var amount = action.amount,
                currency = action.currency,
                date = action.date;
            var payment = [date,amount,currency];
            var newState = Object.assign({},state);
            newState.hist.push(payment);
            return newState;
        }            
        default: return state;
    }    
}
export default reducer;
