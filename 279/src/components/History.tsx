
import * as React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import Actions from '../actions';


interface HistoryProps {
    curs: {
        rates: {
            [key: string]: number
        },
        date: Date
    };
    hist: Array<[Date, number, string]>;
    onHistory: Function
};
interface HistoryState {
    store: Object
};

class History extends React.Component<HistoryProps, HistoryState>{
    handleHistory() {
        console.log("historying");
    }
    render() {
        //////MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs, hist } = this.props;
        let rateCodes: string[] = Object.getOwnPropertyNames(curs.currencyData.rates);
        let currencies = rateCodes.map((code) => {
            return (<option value={code}>{code}</option>);
        });
        let transactions = hist.map(
            (transaction) => {
                return (
                    <tr>
                        <td>{transaction[0]}</td>
                        <td>{transaction[1]}</td>
                        <td>{transaction[2]} {transaction[3]}</td>
                    </tr>
                );
            }
        )
        return (
            <div id="history">
                <h3>History</h3>
                <div>
                    <p>Display amounts in:</p>
                    <select className="currencies" defaultValue="USD">
                        {currencies}
                    </select>
                    <button onClick={this.handleHistory}>Change</button>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Concept</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        curs: state.curs,
        hist: state.hist
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // convert: (from: string, amount: number, to: string) => {
        //     dispatch(Actions.Convert(from, amount, to));
        // }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(History as any);