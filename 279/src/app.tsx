
import * as React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history/createBrowserHistory';

import store from './store';
import Home from './components/Home';
import Converter from './components/Converter';
import Spend from './components/Spend';
import History from './components/History';

var history = createBrowserHistory;

render(
    <Router history={history}>
        <Route path="/" component={Home}>
        <Switch>
            <Route path="/converter" component={Converter} currencies={store.curs}/>
            <Route path="/spend" component={Spend} currencies={store.curs}/>
            <Route path="/history" component={History} currencies={store.curs} transactions={store.hist}/>
        </Switch>
        </Route>
    </Router>
    ,document.getElementById('container')
);
