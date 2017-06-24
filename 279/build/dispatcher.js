"use strict";
const flux_1 = require("flux");
class myDispatcher extends flux_1.Dispatcher {
    dispatch(action = {}) {
        console.log("Dispatched: ", action);
        super.dispatch(action);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new myDispatcher();
