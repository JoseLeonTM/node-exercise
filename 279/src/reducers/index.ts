
import { combineReducers } from 'redux';
import currencies from './currencyReducer';
import history from './historyReducer';

const Reducers = combineReducers({
    curs : currencies,
    hist : history
});

export default Reducers;
