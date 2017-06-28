"use strict";
const React = require("react");
;
;
// interface spendType{
//     handleSpend : Function
// }
class Spend extends React.Component {
    // componentDidMount(){
    //     this.unsubscribe = store.subscribe(()=>{
    //         this.setState({state: store.getState()});
    //     })
    // }
    // componentWillUnmount(){
    //     this.unsubscribe();
    // }
    handleSpend() {
        console.log("spending");
    }
    render() {
        let curs = this.props.route.currencies.map((cur) => {
            return (React.createElement("option", { value: cur }, cur));
        });
        return (React.createElement("div", { id: "spend" },
            React.createElement("h3", null, "Converter"),
            React.createElement("select", { id: "currencies" }, curs),
            React.createElement("div", { className: "amount" },
                React.createElement("input", { type: "number", min: "0.01", required: true })),
            React.createElement("h4", null, " To "),
            React.createElement("select", { id: "currencies" }, curs),
            React.createElement("button", { onClick: this.handleSpend }, "Convert"),
            React.createElement("div", { className: "amount" },
                React.createElement("p", { id: "convResult" }))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Spend;
