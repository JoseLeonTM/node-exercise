"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
;
class Converter extends React.Component {
    constructor() {
        super();
        this.handleConvert = this.handleConvert.bind(this);
        console.log("Props: ", this.props);
    }
    handleConvert() {
        const { convert } = this.props;
        let from = document.getElementsByClassName('currencies')[0].value, to = document.getElementsByClassName('currencies')[1].value, amount = document.getElementsByClassName('amount')[0].value;
        convert(from, amount, to);
    }
    render() {
        //////MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs } = this.props;
        let rateCodes = Object.getOwnPropertyNames(curs.rates);
        let currencies = rateCodes.map((code) => {
            return (React.createElement("option", { value: code }, code));
        });
        return (React.createElement("div", { id: "converter" },
            React.createElement("h3", null, "Converter"),
            React.createElement("div", { className: "currency" },
                React.createElement("label", null, "Currency"),
                React.createElement("select", { className: "currencies" }, currencies)),
            React.createElement("div", { className: "amount" },
                React.createElement("label", null, "Amount"),
                React.createElement("input", { type: "number", min: "0.01", required: true })),
            React.createElement("h4", null, " To "),
            React.createElement("div", null,
                React.createElement("label", null, "Currency"),
                React.createElement("select", { className: "currencies" }, currencies)),
            React.createElement("button", { onClick: this.handleConvert }, "Convert"),
            React.createElement("div", { className: "amount" },
                React.createElement("p", { id: "convResult" }))));
    }
}
const mapStateToProps = (state) => {
    return {
        curs: state.curs
    };
};
const mapDispatchToProps = dispatch => {
    return {
        convert: (from, amount, to) => {
            dispatch(actions_1.default.Convert(from, amount, to));
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Converter);
