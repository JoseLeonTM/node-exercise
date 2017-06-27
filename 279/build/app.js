"use strict";
const React = require("react");
const react_dom_1 = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const createBrowserHistory_1 = require("history/createBrowserHistory");
const store_1 = require("./store");
const Home_1 = require("./components/Home");
const Converter_1 = require("./components/Converter");
const Spend_1 = require("./components/Spend");
const History_1 = require("./components/History");
var history = createBrowserHistory_1.createBrowserHistory;
react_dom_1.render(React.createElement(react_router_dom_1.BrowserRouter, { history: history },
    React.createElement(react_router_dom_1.Route, { path: "/", component: Home_1.default },
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { path: "/converter", component: Converter_1.default, currencies: store_1.default.curs }),
            React.createElement(react_router_dom_1.Route, { path: "/spend", component: Spend_1.default, currencies: store_1.default.curs }),
            React.createElement(react_router_dom_1.Route, { path: "/history", component: History_1.default, currencies: store_1.default.curs, transactions: store_1.default.hist })))), document.getElementById('container'));
