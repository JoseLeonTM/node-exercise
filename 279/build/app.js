"use strict";
const React = require("react");
const react_dom_1 = require("react-dom");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const _1 = require("./reducers/");
const Container_1 = require("./components/Container");
let store = redux_1.createStore(_1.default);
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(Container_1.default, null)), document.getElementById('root'));
