
import * as React from 'react';
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
// interface convertType{
//     handleConvert : Function
// }
class Converter extends React.Component<ConverterProps, ConverterState>{
    handleConvert(){
        console.log("converting");
        // this.props.onConvert(this.refs.amount.value);
        // this.refs.amount.value='';
    }
    render(){
        let curs = this.props.route.currencies.map(
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
export default Converter;
