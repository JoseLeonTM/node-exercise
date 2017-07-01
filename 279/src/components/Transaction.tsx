import * as React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';
import Reducers from '../reducers';

interface TransactionProps {
    transaction: Function;
    curs: {
        rates: {
            [key: string]: number
        },
        date: Date
    };
};
interface TransactionState { };

class Transaction extends React.Component<TransactionProps, TransactionState>{
    handleTransaction() {
        const { transaction } = this.props;
        let currency = (document.getElementsByClassName('currencies')[0] as HTMLSelectElement).value,
            amount = (document.getElementsByClassName('currencies')[1] as HTMLSelectElement).value,
            date = (document.getElementsByClassName('amount')[0] as HTMLInputElement).value;
        transaction(currency, amount, date);
    }
    render() {
        //////MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs } = this.props;
        let rateCodes: string[] = Object.getOwnPropertyNames(curs.rates);
        let currencies = rateCodes.map((code) => {
            return (<option value={code}>{code}</option>);
        });
        return (
            <div id="transaction">
                <h3>Transaction</h3>
                <div className="currency">
                    <label>Currency</label>
                    <select id="currencies">
                        {currencies}
                    </select>
                </div>
                <div className="amount">
                    <label>Amount</label>
                    <input type="number" min="0.01" required />
                </div>
                <div className="concept">
                    <label>Concept</label>
                    <input type="text" required />
                </div>
                <div className="date">
                    <label>Date</label>
                    <input type="date" required />
                </div>
                <button onClick={this.handleTransaction}>Convert</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        curs: state.curs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        transaction: (from: string, amount: number, to: string) => {
            dispatch(Actions.Transaction(from, amount, to));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transaction as any);
