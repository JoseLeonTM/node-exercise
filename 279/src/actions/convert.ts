export default function Convert(from:string,amount:number,to:string){
        return{
            type: 'convert',
            from: from,
            to: to,
            amount: amount
        };
    };
