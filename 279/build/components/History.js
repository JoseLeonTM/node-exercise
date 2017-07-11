"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
;
;
class History extends React.Component {
    constructor() {
        super();
        this.getValue = this.getValue.bind(this);
    }
    getValue(ev) {
        let value = ev.target.value, { changeCur } = this.props;
        changeCur(value);
    }
    render() {
        //////MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs, hist, histState } = this.props;
        let rateCodes = Object.getOwnPropertyNames(curs.currencyData.rates);
        let currencies = rateCodes.map((code) => {
            return (React.createElement("option", { key: code }, code));
        });
        let transactions = hist.map((transaction, ind) => {
            var currency = curs.currencyData.rates[histState.cur], displayValue = (transaction[2] * currency).toFixed(2);
            return (React.createElement("tr", { key: ind },
                React.createElement("td", { className: "tDate" }, transaction[0]),
                React.createElement("td", { className: "tConcept" }, transaction[1]),
                React.createElement("td", { className: "tAmount" },
                    displayValue,
                    " ",
                    histState.cur)));
        });
        return (React.createElement("div", { id: "history" },
            React.createElement("h3", null, "History"),
            React.createElement("div", null,
                React.createElement("p", null, "Display amounts in:"),
                React.createElement("select", { className: "currencies", value: histState.cur, onChange: this.getValue }, currencies)),
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: "tDate" }, "Date"),
                        React.createElement("th", { className: "tConcept" }, "Concept"),
                        React.createElement("th", { className: "tAmount" }, "Amount"))),
                React.createElement("tbody", null, transactions))));
    }
}
const mapStateToProps = (state) => {
    return {
        curs: state.curs,
        hist: state.hist,
        histState: state.histState
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeCur: (cur) => {
            dispatch(actions_1.default.histChange(cur));
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(History);
//# sourceMappingURL=History.js.map