
import {createStore} from 'redux';
import reducer from './reducers';

var store = createStore(reducer);

console.log("State: ",store.getState());

export default store;

// let unsubscribe = store.subscribe(()=>
// console.log(store.getState())
// );

// store.dispatch()
// unsubscribe();
