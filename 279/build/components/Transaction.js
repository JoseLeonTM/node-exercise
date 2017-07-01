"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
;
;
class Transaction extends React.Component {
    handleTransaction() {
        const { transaction } = this.props;
        let currency = document.getElementsByClassName('currencies')[0].value, amount = document.getElementsByClassName('currencies')[1].value, date = document.getElementsByClassName('amount')[0].value;
        transaction(currency, amount, date);
    }
    render() {
        //////MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs } = this.props;
        let rateCodes = Object.getOwnPropertyNames(curs.rates);
        let currencies = rateCodes.map((code) => {
            return (React.createElement("option", { value: code }, code));
        });
        return (React.createElement("div", { id: "transaction" },
            React.createElement("h3", null, "Transaction"),
            React.createElement("div", { className: "currency" },
                React.createElement("label", null, "Currency"),
                React.createElement("select", { id: "currencies" }, currencies)),
            React.createElement("div", { className: "amount" },
                React.createElement("label", null, "Amount"),
                React.createElement("input", { type: "number", min: "0.01", required: true })),
            React.createElement("div", { className: "concept" },
                React.createElement("label", null, "Concept"),
                React.createElement("input", { type: "text", required: true })),
            React.createElement("div", { className: "date" },
                React.createElement("label", null, "Date"),
                React.createElement("input", { type: "date", required: true })),
            React.createElement("button", { onClick: this.handleTransaction }, "Convert")));
    }
}
const mapStateToProps = (state) => {
    return {
        curs: state.curs
    };
};
const mapDispatchToProps = dispatch => {
    return {
        transaction: (from, amount, to) => {
            dispatch(actions_1.default.Transaction(from, amount, to));
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Transaction);
