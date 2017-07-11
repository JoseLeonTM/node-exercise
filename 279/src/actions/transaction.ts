export default function Transaction(date, concept, amount, cur) {    
    return {
        type: 'addTransaction',
        amount,
        concept,
        date,
        cur
    };
}
export function changeTransValues(property, value) {
    return {
        type: 'changeTransValues',
        property,
        value
    }
}
export function clearTransValues(){
    return{
        type : 'clearTransValues'
    }
}