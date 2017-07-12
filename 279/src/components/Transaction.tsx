import * as React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';
import Reducers from '../reducers';

interface TransactionProps {
    transaction: Function;
    updateValues: Function;
    clearValues: Function;
    transState: TransactionState;
    curs: {
        currencyData: {
            rates: {
                [key: string]: number
            },
        }
        date: Date
    };
};
interface TransactionState {
    currency: string;
    amount: number;
    concept: string;
    date: string;
    conv: {
        from: number;
        usd: number;
    }
};
class Transaction extends React.Component<TransactionProps, TransactionState>{
    constructor() {
        super();
        this.handleTransaction = this.handleTransaction.bind(this);
        this.getValue = this.getValue.bind(this);
    }
    handleTransaction() {
        //SENDS AN ACTION WITH THE DATA AND CLEARS THE INPUTS///
        const { curs, transaction, transState, clearValues } = this.props;
        var cur = curs.currencyData.rates[transState.currency];            
        if (transState.date && transState.concept && transState.amount && transState.currency) {
            transaction(transState.date, transState.concept,transState.amount,cur);
            clearValues();
        }
    }
    getValue(ev) {
        //PASSES VALUES FROM INPUTS TO THE STORE
        let property = ev.target.className,
            value = ev.target.value,
            { updateValues } = this.props;
        updateValues(property, value);
    }
    render() {
        //MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs, transState } = this.props;
        let rateCodes: string[] = Object.getOwnPropertyNames(curs.currencyData.rates);
        let currencies = rateCodes.map((code) => {
            return (<option key={code}>{code}</option>);
        });
        return (
            <div id="transaction">
                <h3>Transaction</h3>
                <div className="currency">
                    <label>Currency</label>
                    <select className="currency" onChange={this.getValue} value={transState.currency} >
                        {currencies}
                    </select>
                </div>
                <div className="amount">
                    <label>Amount</label>
                    <input type="number" className="amount" required onChange={this.getValue} value={transState.amount} />
                </div>
                <div className="concept">
                    <label>Concept</label>
                    <input type="text" className="concept" required onChange={this.getValue} value={transState.concept} />
                </div>
                <div className="date">
                    <label>Date</label>
                    <input type="date" className="date" required onChange={this.getValue} value={transState.date} />
                </div>
                <button onClick={this.handleTransaction}>Save</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        curs: state.curs,
        transState: state.transState
    }
}
const mapDispatchToProps = dispatch => {
    return {
        transaction: (date: Date, concept: string, amount: number, currency: string) => {
            dispatch(Actions.Update())
            .then(
                function(){dispatch(Actions.Transaction(date, concept, amount, currency));}
            )
        },
        updateValues: (property: string, value) => {
            dispatch(Actions.changeTransValues(property, value));
        },
        clearValues: () => {
            dispatch(Actions.clearTransValues());
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transaction as any);
