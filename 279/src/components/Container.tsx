
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Actions from '../actions';
import Home from './Home';
import Converter from './Converter';
import Transaction from './Transaction';
import History from './History';

interface ContainerProps{
    init: Function;
}
interface ContainerState{}

class Container extends React.Component<ContainerProps,ContainerState>{
    constructor(){
        super();
        this.props.init();
    }
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Home}/>
                    <Route path="/converter" component={Converter}/>
                    <Route path="/spend" component={Transaction}/>
                    <Route path="/history" component={History}/>
                </div>
            </Router>
        )
    }
}
export default connect(
    null,
    function(dispatch){
        console.log("actions: ",Actions);
        return {
            init : Actions.Update
        }
    }
)(Container as any);
