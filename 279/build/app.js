"use strict";
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const Converter_1 = require("components/Converter");
var currencies = ['MXN', 'USD', 'YEN'];
react_dom_1.render(react_1.default.createElement(Converter_1.default, { currencies: currencies }), document.getElementById('container'));
