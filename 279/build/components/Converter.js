"use strict";
const React = require("react");
;
;
// interface convertType{
//     handleConvert : Function
// }
class Converter extends React.Component {
    handleConvert() {
        console.log("converting");
        // this.props.onConvert(this.refs.amount.value);
        // this.refs.amount.value='';
    }
    render() {
        let curs = this.props.route.currencies.map((cur) => {
            return (React.createElement("option", { value: cur }, cur));
        });
        return (React.createElement("div", { id: "converter" },
            React.createElement("h3", null, "Converter"),
            React.createElement("select", { id: "currencies" }, curs),
            React.createElement("div", { className: "amount" },
                React.createElement("input", { type: "number", min: "0.01", required: true })),
            React.createElement("h4", null, " To "),
            React.createElement("select", { id: "currencies" }, curs),
            React.createElement("button", { onClick: this.handleConvert }, "Convert"),
            React.createElement("div", { className: "amount" },
                React.createElement("p", { id: "convResult" }))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Converter;
