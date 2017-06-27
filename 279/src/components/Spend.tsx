

import * as React from 'react';
import store from '../store';

interface routeProps{
    currencies : string[]
}
interface SpendProps {
    route : routeProps,
    // currencies: string[],
    onSpend: Function
};
interface SpendState {
    store : Object
};
// interface spendType{
//     handleSpend : Function
// }

class Spend extends React.Component<SpendProps, SpendState>{
    handleSpend(){
        console.log("spending");
        this.props.onSpend();
        // this.refs.amount.value='';
    }
    render(){
        let curs = this.props.route.currencies.map(
            (cur) =>{
                return (<option value={cur}>{cur}</option>);
            }
        );
        return(
            <div id="spend">
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
                <button onClick={this.handleSpend}>Convert</button>
                <div className="amount">
                    <p id="convResult"></p>
                </div>                
            </div>
        )
    }
}
export default Spend;
