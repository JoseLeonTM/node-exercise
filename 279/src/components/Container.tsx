
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
    componentWillMount(){   
        this.props.init();       
    }         
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Home as any}/>
                    <Route path="/converter" component={Converter as any}/>
                    <Route path="/transaction" component={Transaction as any}/>
                    <Route path="/history" component={History as any}/>
                </div>
            </Router>
        )
    }
}
export default connect(
    null,
    function(dispatch){
        return {
            init : (dispatch)=>{
                Actions.Update();
            }
        }
    }
)(Container as any);
