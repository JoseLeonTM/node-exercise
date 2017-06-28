
import * as React from 'react';
import {connect} from 'react-redux';
import store from '../store';

interface routeProps{
    currencies : string[]
}
interface ConverterProps {
    route : routeProps,
    currencies: string[],
    onConvert: Function
};
interface ConverterState {
    store : Object
};
class Converter extends React.Component<ConverterProps, ConverterState>{
    // unsubscribe(){}
    // componentDidMount(){
    //     this.unsubscribe = store.subscribe(()=>{
    //         this.setState({state: store.getState()});
    //     })
    // }
    // componentWillUnmount(){
    //     this.unsubscribe();
    // }
    handleConvert(){
        console.log("converting");
    }
    render(){
        const {store} = this.context;
        const state = store.getState();

        let curs = state.curs.map(
            (cur) =>{
                return (<option value={cur}>{cur}</option>);
            }
        );
        return(
            <div id="converter">
                <h3>Converter</h3>
                <select id="currencies">
                    {curs}
                </select>
                <div className="amount">
                    <input type="number" min="0.01" required />
                </div>                
                <h4> To </h4>
                <select id="currencies">
                    {curs}
                </select>
                <button onClick={this.handleConvert}>Convert</button>
                <div className="amount">
                    <p id="convResult"></p>
                </div>                
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options
)(Component);
