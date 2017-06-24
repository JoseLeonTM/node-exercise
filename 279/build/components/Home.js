"use strict";
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const store_1 = require("../store");
;
;
// interface HomeType{
//     unsubscribe : Function
// }
class Home extends React.Component {
    componentDidMount() {
        this.unsubscribe = store_1.default.subscribe(() => {
            this.setState({ state: store_1.default.getState() });
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (React.createElement("div", { id: "home" },
            React.createElement("nav", null,
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "./converter", activeClassName: "active" }, "Converter")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "./spend", activeClassName: "active" }, "Spend"))))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
