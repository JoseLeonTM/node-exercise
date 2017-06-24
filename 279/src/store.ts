
import {createStore} from 'redux';
import reducer from './reducers';
import {spend, convert} from './actions';

var store = createStore(reducer);

console.log("State: ",store.getState());

export default store;

// let unsubscribe = store.subscribe(()=>
// console.log(store.getState())
// );

// store.dispatch()
// unsubscribe();
