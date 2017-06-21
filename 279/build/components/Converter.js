"use strict";
const react_1 = require("react");
class Converter extends react_1.Component {
    render() {
        let curs = this.props.currencies.map((cur) => {
            return React.createElement("option", { value: cur }, cur);
        });
        return (React.createElement("div", { id: "converter" },
            React.createElement("h3", null, "Converter"),
            React.createElement("select", null, curs),
            React.createElement("div", { className: "amount" },
                React.createElement("input", { type: "number", min: "0.01", required: true })),
            React.createElement("h4", null, " To "),
            React.createElement("select", null, curs),
            React.createElement("div", { className: "amount" },
                React.createElement("p", { id: "convResult" }))));
    }
}
Converter.propTypes = {
    currencies: react_1.PropTypes.array.isRequired
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Converter;
