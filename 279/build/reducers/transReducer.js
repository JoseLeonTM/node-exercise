"use strict";
function history(state = [], action) {
    switch (action.type) {
        case 'addTransaction': {
            var amount = ((action.amount) / action.cur), concept = action.concept, date = action.date;
            var payment = [date, concept, amount];
            return [...state, payment];
        }
        default:
            return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = history;
//# sourceMappingURL=transReducer.js.map