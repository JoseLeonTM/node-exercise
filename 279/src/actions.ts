import myDispatcher from './dispatcher';
// import constants from './constant';

export function update(){
    return{
        type:'update'
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
