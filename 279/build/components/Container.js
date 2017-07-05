"use strict";
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
const Home_1 = require("./Home");
const Converter_1 = require("./Converter");
const Transaction_1 = require("./Transaction");
const History_1 = require("./History");
class Container extends React.Component {
    constructor() {
        super();
        this.props.init();
    }
    render() {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Route, { path: "/", component: Home_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/converter", component: Converter_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/spend", component: Transaction_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/history", component: History_1.default }))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(null, function (dispatch) {
    console.log("actions: ", actions_1.default);
    return {
        init: actions_1.default.Update
    };
})(Container);
