import myDispatcher from './dispatcher';
import store from './store';

function requestUpdate(url){
    return{
        type : 'requestUpdate',
        url
    }
}
function receiveUpdate(url,res){
    console.log(res);
    return{
        type : 'update',
        url,
        currencies : res,
        date : Date.now()
    }
}

export function update(url='https://openexchangerates.org/api/latest.json?app_id=ae78aed5df4c4e3091aae93aa6b381a5'){
    return function(dispatch){
        dispatch(requestUpdate(url));

        return fetch(url)
        .then((response)=> response.json())
        .then((response)=>{
            dispatch(receiveUpdate(url,response));
        });
    }
}

export function convert(from,amount,to){
        return{
            type: 'convert',
            from: from,
            to: to,
            amount: amount
        };
    };
    
export function spend(currency,amount,date){
        return {
            type: 'spend',
            amount: amount,
            currency : currency,
            date : date
        };
    }
