export default function Transaction(date,concept, amount, currency) {
    return {
        type: 'addTransaction',
        amount: amount,
        concept : concept,
        currency: currency,
        date: date
    };
}
