import * as React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';
import Reducers from '../reducers';

interface Transaction {
    values: {
        currency: string,
        concept: string,
        amount: number,
        date: Date
    }
}
interface TransactionProps {
    transaction: Function;
    transState: Function;
    curs: {
        rates: {
            [key: string]: number
        },
        date: Date
    };
    state: TransactionState;
};
interface TransactionState {
    currency: string;
    amount: number;
    concept: string;
    date: Date;
};

class Transaction extends React.Component<TransactionProps, TransactionState>{
    constructor() {
        super();
        this.handleTransaction = this.handleTransaction.bind(this);
        this.getValue = this.getValue.bind(this);
        this.values = {
            currency: 'USD',
            concept: '',
            amount: 0,
            date: Date.now()
        }
    }
    handleTransaction() {
        const { transaction } = this.props;
        // let currency = (document.getElementsByClassName('currencies')[0] as HTMLSelectElement).value,
        //     amount = (document.getElementsByClassName('currencies')[1] as HTMLSelectElement).value,
        //     date = (document.getElementsByClassName('amount')[0] as HTMLInputElement).value;
        transaction(this.values.date, this.values.concept, this.values.amount, this.values.currency);
    }
    getValue(ev) {
        let property = ev.target.className;
        if (property != 'date') {
            this.values[property] = ev.target.value;
        }
        else {
            this.values[property] = new Date(ev.target.value);
        }
    }
    render() {
        //////MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs } = this.props;
        let rateCodes: string[] = Object.getOwnPropertyNames(curs.currencyData.rates);
        let currencies = rateCodes.map((code) => {
            return (<option value={code}>{code}</option>);
        });
        return (
            <div id="transaction">
                <h3>Transaction</h3>
                <div className="currency">
                    <label>Currency</label>
                    <select className="currency" defaultValue="USD" onChange={this.getValue}>
                        {currencies}
                    </select>
                </div>
                <div className="amount">
                    <label>Amount</label>
                    <input type="number" className="amount" required onChange={this.getValue} />
                </div>
                <div className="concept">
                    <label>Concept</label>
                    <input type="text" className="concept" required onChange={this.getValue} />
                </div>
                <div className="date">
                    <label>Date</label>
                    <input type="date" className="date" required onChange={this.getValue} />
                </div>
                <button onClick={this.handleTransaction}>Save</button>
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
        transaction: (date: Date, concept: string, amount: number, currency: string) => {
            dispatch(Actions.Transaction(date, concept, amount, currency));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transaction as any);
