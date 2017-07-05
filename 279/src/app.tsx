
import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import Reducers from './reducers';
import Container from './components/Container';
import Actions from './actions';

// const logger = createLogger();

let store = createStore(
    Reducers,
    applyMiddleware(
        thunk
        // logger
    )
);
store.dispatch(Actions.Update());
// console.log("State: ",store.getState());
render(
    <Provider store={store}>
        <Container />
    </Provider>
    , document.getElementById('root')
);
