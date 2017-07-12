
import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import 'file-loader?name=[name].css!./styles.scss';
// import 'file-loader?name=[name].js!./server.ts';

import Reducers from './reducers';
import Container from './components/Container';
import Actions from './actions';

let store = createStore(
    Reducers,
    applyMiddleware(
        thunk        
    )
);
store.dispatch(Actions.Update());
render(
    <Provider store={store}>
        <Container />
    </Provider>
    , document.getElementById('root')
);