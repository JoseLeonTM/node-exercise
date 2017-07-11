"use strict";
const initialState = {
    from: 'USD',
    amount: 1,
    to: 'MXN',
    result: null
};
function convState(state = initialState, action) {
    switch (action.type) {
        case 'changeConvValues': {
            return Object.assign({}, state, {
                [action.property]: action.value
            });
        }
        case 'clearConvValues': {
            return initialState;
        }
        case 'result': {
            var result = ((action.amount * action.to) / action.from);
            return Object.assign({}, state, {
                result: result
            });
        }
        default:
            return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = convState;
//# sourceMappingURL=convState.js.map