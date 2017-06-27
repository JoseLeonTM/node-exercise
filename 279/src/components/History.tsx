
import * as React from 'react';
import store from '../store';

interface routeProps{
    currencies : string[]
    transactions : Array<number | string>
}
interface HistoryProps {
    route : routeProps,
    currencies: string[],
    onHistory: Function
};
interface HistoryState {
    store : Object
};

class History extends React.Component<HistoryProps, HistoryState>{
    handleHistory(){
        console.log("historying");
        this.props.onHistory();
        // this.refs.amount.value='';
    }
    render(){
        let curs = this.props.route.currencies.map(
            (cur) =>{
                return (<option value={cur}>{cur}</option>);
            }
        );
        let transactions = this.props.route.transactions.map(
            (transaction)=>{
                return(
                    <tr>
                        <td>transaction[0]</td>
                        <td>transaction[1]</td>
                        <td>transaction[2]</td>
                    </tr>
                );
            }
        )
        return(
            <div id="history">
                <h3>History</h3>
                <select id="currencies">
                    {curs}
                </select>
                <div className="amount">
                    <input type="number" min="0.01" required />
                </div>                
                <h4> To </h4>
                <select>
                    {curs}
                </select>
                <button onClick={this.handleHistory}>Convert</button>
                <div className="amount">
                    <p id="convResult"></p>
                </div>                
            </div>
        )
    }
}
export default History;
