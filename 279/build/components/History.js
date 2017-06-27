"use strict";
const React = require("react");
;
;
class History extends React.Component {
    handleHistory() {
        console.log("historying");
        this.props.onHistory();
        // this.refs.amount.value='';
    }
    render() {
        let curs = this.props.route.currencies.map((cur) => {
            return (React.createElement("option", { value: cur }, cur));
        });
        let transactions = this.props.route.transactions.map((transaction) => {
            return (React.createElement("tr", null,
                React.createElement("td", null, "transaction[0]"),
                React.createElement("td", null, "transaction[1]"),
                React.createElement("td", null, "transaction[2]")));
        });
        return (React.createElement("div", { id: "history" },
            React.createElement("h3", null, "History"),
            React.createElement("select", { id: "currencies" }, curs),
            React.createElement("div", { className: "amount" },
                React.createElement("input", { type: "number", min: "0.01", required: true })),
            React.createElement("h4", null, " To "),
            React.createElement("select", null, curs),
            React.createElement("button", { onClick: this.handleHistory }, "Convert"),
            React.createElement("div", { className: "amount" },
                React.createElement("p", { id: "convResult" }))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = History;
