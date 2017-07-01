export default function Transaction(currency,amount,date){
        return {
            type: 'transaction',
            amount: amount,
            currency : currency,
            date : date
        };
    }