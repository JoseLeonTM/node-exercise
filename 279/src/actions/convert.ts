export default function Convert(from: number, amount: number, to: number) {
    return {
        type: 'result',
        from,
        amount,
        to
    }
};
export function changeConvValues(property, value) {
    return {
        type: 'changeConvValues',
        property,
        value
    }
}
export function clearConvValues() {
    return {
        type: 'clearConvValues'
    }
}
