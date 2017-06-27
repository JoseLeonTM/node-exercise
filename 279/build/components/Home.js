"use strict";
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const store_1 = require("../store");
;
;
class Home extends React.Component {
    unsubscribe() { }
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
                        React.createElement(react_router_dom_1.Link, { to: "./converter" }, "Converter")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "./spend" }, "Spend")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "./history" }, "History"))))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
