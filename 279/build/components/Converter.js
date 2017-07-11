"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
;
class Converter extends React.Component {
    constructor() {
        super();
        this.handleConvert = this.handleConvert.bind(this);
        this.getValue = this.getValue.bind(this);
    }
    handleConvert() {
        const { convert, curs, convState } = this.props;
        ///GET THE VALUES FROM THE STORED CURRENCIES
        var from = curs.currencyData.rates[convState.from], to = curs.currencyData.rates[convState.to];
        //////CALCULATE THE CONVERSION
        convert(from, convState.amount, to);
    }
    getValue(ev) {
        let property = ev.target.className, value = ev.target.value, { updateValues } = this.props;
        updateValues(property, value);
    }
    render() {
        //////MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs, convState } = this.props;
        let rateCodes = Object.getOwnPropertyNames(curs.currencyData.rates);
        let currencies = rateCodes.map((code) => {
            return (React.createElement("option", { key: code }, code));
        });
        return (React.createElement("div", { id: "converter" },
            React.createElement("h3", null, "Converter"),
            React.createElement("h4", null, " From "),
            React.createElement("div", null,
                React.createElement("label", null, "Currency"),
                React.createElement("select", { className: "from", onChange: this.getValue, value: convState.from }, currencies)),
            React.createElement("div", null,
                React.createElement("label", null, "Amount"),
                React.createElement("input", { type: "number", className: "amount", required: true, onChange: this.getValue, value: convState.amount })),
            React.createElement("h4", null, " To "),
            React.createElement("div", null,
                React.createElement("label", null, "Currency"),
                React.createElement("select", { className: "to", onChange: this.getValue, value: convState.to }, currencies)),
            React.createElement("button", { onClick: this.handleConvert }, "Convert"),
            React.createElement("div", null,
                React.createElement("p", null, (convState.result ? convState.result.toFixed(2) : '-')))));
    }
}
const mapStateToProps = (state) => {
    return {
        curs: state.curs,
        convState: state.convState
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        convert: (from, amount, to) => {
            dispatch(actions_1.default.Convert(from, amount, to));
        },
        updateValues: (property, value) => {
            dispatch(actions_1.default.changeConvValues(property, value));
        },
        clearValues: () => {
            dispatch(actions_1.default.clearConvValues());
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Converter);
//# sourceMappingURL=Converter.js.map