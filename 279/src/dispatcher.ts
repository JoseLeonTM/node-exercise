import {Dispatcher} from 'flux';

class myDispatcher extends Dispatcher{
    dispatch(action={}){
        console.log("Dispatched: ",action);
        super.dispatch(action);
    }
}
export default new myDispatcher();