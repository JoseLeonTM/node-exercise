
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Home from './components/Home';
import Converter from './components/Converter';
import Spend from './components/Spend';
import History from './components/History';

// var curs = ["USD", "MXN", "EUR", "YEN"];
// var h = [];
render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={Home} />
                <Route path="/converter" component={Converter} />
                <Route path="/spend" component={Spend} />
                <Route path="/history" component={History} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('container')
);
