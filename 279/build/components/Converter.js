"use strict";
const react_1 = require("react");
class Converter extends react_1.Component {
    render() {
        let curs = this.props.currencies.map((cur) => {
            return react_1.default.createElement("option", { value: cur }, cur);
        });
        return (react_1.default.createElement("div", { id: "converter" },
            react_1.default.createElement("h3", null, "Converter"),
            react_1.default.createElement("select", null, curs),
            react_1.default.createElement("div", { className: "amount" },
                react_1.default.createElement("input", { type: "number", min: "0.01", required: true })),
            react_1.default.createElement("h4", null, " To "),
            react_1.default.createElement("select", null, curs),
            react_1.default.createElement("div", { className: "amount" },
                react_1.default.createElement("p", { id: "convResult" }))));
    }
}
Converter.propTypes = {
    currencies: react_1.PropTypes.array.isRequired
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Converter;
