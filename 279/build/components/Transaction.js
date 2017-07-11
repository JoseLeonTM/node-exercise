"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
;
;
class Transaction extends React.Component {
    constructor() {
        super();
        this.handleTransaction = this.handleTransaction.bind(this);
        this.getValue = this.getValue.bind(this);
    }
    handleTransaction() {
        //SENDS AN ACTION WITH THE DATA AND CLEARS THE INPUTS///
        const { curs, transaction, transState, clearValues } = this.props;
        var cur = curs.currencyData.rates[transState.currency];
        if (transState.date && transState.concept && transState.amount && transState.currency) {
            transaction(transState.date, transState.concept, transState.amount, cur);
            clearValues();
        }
    }
    getValue(ev) {
        //PASSES VALUES FROM INPUTS TO THE STORE
        let property = ev.target.className, value = ev.target.value, { updateValues } = this.props;
        updateValues(property, value);
    }
    render() {
        //MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs, transState } = this.props;
        let rateCodes = Object.getOwnPropertyNames(curs.currencyData.rates);
        let currencies = rateCodes.map((code) => {
            return (React.createElement("option", { key: code }, code));
        });
        return (React.createElement("div", { id: "transaction" },
            React.createElement("h3", null, "Transaction"),
            React.createElement("div", { className: "currency" },
                React.createElement("label", null, "Currency"),
                React.createElement("select", { className: "currency", onChange: this.getValue, value: transState.currency }, currencies)),
            React.createElement("div", { className: "amount" },
                React.createElement("label", null, "Amount"),
                React.createElement("input", { type: "number", className: "amount", required: true, onChange: this.getValue, value: transState.amount })),
            React.createElement("div", { className: "concept" },
                React.createElement("label", null, "Concept"),
                React.createElement("input", { type: "text", className: "concept", required: true, onChange: this.getValue, value: transState.concept })),
            React.createElement("div", { className: "date" },
                React.createElement("label", null, "Date"),
                React.createElement("input", { type: "date", className: "date", required: true, onChange: this.getValue, value: transState.date })),
            React.createElement("button", { onClick: this.handleTransaction }, "Save")));
    }
}
const mapStateToProps = (state) => {
    return {
        curs: state.curs,
        transState: state.transState
    };
};
const mapDispatchToProps = dispatch => {
    return {
        transaction: (date, concept, amount, currency) => {
            dispatch(actions_1.default.Transaction(date, concept, amount, currency));
        },
        updateValues: (property, value) => {
            dispatch(actions_1.default.changeTransValues(property, value));
        },
        clearValues: () => {
            dispatch(actions_1.default.clearTransValues());
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Transaction);
//# sourceMappingURL=Transaction.js.map