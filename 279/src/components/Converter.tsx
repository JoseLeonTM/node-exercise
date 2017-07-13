
import * as React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';

interface ConverterProps {
    convert: Function;
    updateValues: Function;
    clearValues: Function;
    convState: {
        from: string;
        amount: string;
        to: string;
        result: number;
    }
    curs: {
        currencyData: {
            rates: {
                [key: string]: number
            }
        },
        date: Date
    };
};
export class Converter extends React.Component<ConverterProps, any>{
    constructor() {
        super();
        this.handleConvert = this.handleConvert.bind(this);
        this.getValue = this.getValue.bind(this);
    }
    handleConvert() {
        const { convert, curs, convState } = this.props;
        ///GET THE VALUES FROM THE STORED CURRENCIES
        var from = curs.currencyData.rates[convState.from],
            to = curs.currencyData.rates[convState.to];
        //////CALCULATE THE CONVERSION
        convert(from, convState.amount, to);
    }
    getValue(ev) {
        let property = ev.target.className,
            value = ev.target.value,
            { updateValues } = this.props;
        updateValues(property, value);
    }
    render() {        
        //////MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs, convState } = this.props;        
        let rateCodes: string[] = Object.getOwnPropertyNames(curs.currencyData.rates);
        let currencies = rateCodes.map((code) => {
            return (<option key={code}>{code}</option>);
        });
        return (
            <div id="converter">
                <h3>Converter</h3>
                <h4> From </h4>
                <div>
                    <label>Currency</label>
                    <select className="from" onChange={this.getValue} value={convState.from}>
                        {currencies}
                    </select>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" className="amount" required onChange={this.getValue} value={convState.amount} />
                </div>
                <h4> To </h4>
                <div>
                    <label>Currency</label>
                    <select className="to" onChange={this.getValue} value={convState.to}>
                        {currencies}
                    </select>
                </div>
                <button onClick={this.handleConvert}>Convert</button>
                <div>
                    <p>{(convState.result ? convState.result.toFixed(2) : '-')}</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        curs: state.curs,
        convState: state.convState
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        convert: (from: number, amount: number, to: number) => {
            dispatch(Actions.Update())
            .then(
                function(){dispatch(Actions.Convert(from, amount, to));}
            )            
        },
        updateValues: (property: string, value) => {
            dispatch(Actions.changeConvValues(property, value));
        },
        clearValues: () => {
            dispatch(Actions.clearConvValues());
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Converter as any);
