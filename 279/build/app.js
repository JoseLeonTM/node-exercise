"use strict";
const React = require("react");
const react_dom_1 = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
// import {createBrowserHistory} from 'history/createBrowserHistory';
const store_1 = require("./store");
const Home_1 = require("./components/Home");
const Converter_1 = require("./components/Converter");
// import Spend from './components/Spend';
// import History from './components/History';
var currencies = ['MXN', 'USD', 'YEN'];
var history = react_router_dom_1.createBrowserHistory();
react_dom_1.render(React.createElement(react_router_dom_1.BrowserRouter, { history: history },
    React.createElement(react_router_dom_1.Route, { path: "/", component: Home_1.default },
        React.createElement(react_router_dom_1.Route, { path: "/converter", component: Converter_1.default, currencies: store_1.default.curs }))), document.getElementById('container'));
