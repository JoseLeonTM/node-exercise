"use strict";
const React = require("react");
const react_dom_1 = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const Home_1 = require("./components/Home");
const Converter_1 = require("./components/Converter");
const Spend_1 = require("./components/Spend");
const History_1 = require("./components/History");
// var curs = ["USD", "MXN", "EUR", "YEN"];
// var h = [];
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", null,
            React.createElement(react_router_dom_1.Route, { path: "/", component: Home_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/converter", component: Converter_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/spend", component: Spend_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/history", component: History_1.default })))), document.getElementById('container'));
