
import * as React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';


interface HistoryProps {
    curs: {
        currencyData: {
            rates: {
                [key: string]: number
            }
        },
        date: Date
    };
    histState: {
        cur: string;
    }
    hist: Array<[Date, string, number]>;
    changeCur: Function
};
interface HistoryState {
    cur: string
};

class History extends React.Component<HistoryProps, HistoryState>{
    constructor(){
        super();
        this.getValue = this.getValue.bind(this);        
    }
    getValue(ev) {
        let value = ev.target.value,
            { changeCur } = this.props;
        changeCur(value);
    }
    render() {
        //////MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs, hist, histState } = this.props;
        let rateCodes: string[] = Object.getOwnPropertyNames(curs.currencyData.rates);
        let currencies = rateCodes.map((code) => {
            return (<option key={code}>{code}</option>);
        });
        let transactions = hist.map(
            (transaction, ind) => {
                var currency = curs.currencyData.rates[histState.cur],
                 displayValue = (transaction[2] * currency).toFixed(2)
                return (
                    <tr key={ind}>
                        <td className="tDate">{transaction[0]}</td>
                        <td className="tConcept">{transaction[1]}</td>
                        <td className="tAmount">{displayValue} {histState.cur}</td>
                    </tr>
                );
            }
        )
        return (
            <div id="history">
                <h3>History</h3>
                <div>
                    <p>Display amounts in:</p>
                    <select className="currencies" value={histState.cur} onChange={this.getValue}>
                        {currencies}
                    </select>                    
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="tDate">Date</th>
                            <th className="tConcept">Concept</th>
                            <th className="tAmount">Amount</th>
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
        hist: state.hist,
        histState: state.histState
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeCur: (cur: string) => {
            dispatch(Actions.histChange(cur));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(History as any);