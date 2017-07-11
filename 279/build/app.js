"use strict";
const React = require("react");
const react_dom_1 = require("react-dom");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const redux_thunk_1 = require("redux-thunk");
require("file-loader?name=[name].css!./styles.scss");
// import 'file-loader?name=[name].js!./server.ts';
const reducers_1 = require("./reducers");
const Container_1 = require("./components/Container");
const actions_1 = require("./actions");
let store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(redux_thunk_1.default));
store.dispatch(actions_1.default.Update());
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(Container_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=app.js.map