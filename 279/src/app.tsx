
import * as React from 'react';
import { render } from 'react-dom';
import {createStore } from 'redux';
import { Provider } from 'react-redux';

import Reducers from './reducers/';
import Container from './components/Container';


let store = createStore(Reducers);
render(
    <Provider store={store}>
        <Container/>
    </Provider>
    , document.getElementById('root')
);
