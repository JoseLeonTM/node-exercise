
import { combineReducers } from 'redux';
import currencies from './currencyReducer';
import convState from './convState';
import history from './transReducer';
import transState from './transState';
import histState from './histState';

const Reducers = combineReducers({
    curs : currencies,
    hist : history,    
    convState,
    transState,
    histState
});

export default Reducers;
