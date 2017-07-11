"use strict";
function histState(state = { cur: 'USD' }, action) {
    switch (action.type) {
        case 'changeCurrency': {
            return Object.assign({}, {
                cur: action.cur
            });
        }
        default:
            return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = histState;
//# sourceMappingURL=histState.js.map