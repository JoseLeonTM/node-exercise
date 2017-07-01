
import * as React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';

interface ConverterProps {
    convert: Function;
    curs: {
        rates: {
            [key: string]: number
        },
        date: Date
    };
};

class Converter extends React.Component<ConverterProps, any>{
    constructor() {
        super();
        this.handleConvert = this.handleConvert.bind(this);
        console.log("Props: ", this.props);
    }
    handleConvert() {
        const { convert } = this.props;
        let from = (document.getElementsByClassName('currencies')[0] as HTMLSelectElement).value,
            to = (document.getElementsByClassName('currencies')[1] as HTMLSelectElement).value,
            amount = (document.getElementsByClassName('amount')[0] as HTMLInputElement).value;
        convert(from, amount, to);
    }
    render() {
        //////MAPPING CURRENCIES INTO <option> ELEMENTS
        const { curs } = this.props;
        let rateCodes: string[] = Object.getOwnPropertyNames(curs.rates);
        let currencies = rateCodes.map((code) => {
            return (<option value={code}>{code}</option>);
        });
        return (
            <div id="converter">
                <h3>Converter</h3>
                <div className="currency">
                    <label>Currency</label>
                    <select className="currencies">
                        {currencies}
                    </select>
                </div>
                <div className="amount">
                    <label>Amount</label>
                    <input type="number" min="0.01" required />
                </div>
                <h4> To </h4>
                <div>
                    <label>Currency</label>
                    <select className="currencies">
                        {currencies}
                    </select>
                </div>
                <button onClick={this.handleConvert}>Convert</button>
                <div className="amount">
                    <p id="convResult"></p>
                </div>
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
        convert: (from: string, amount: number, to: string) => {
            dispatch(Actions.Convert(from, amount, to));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Converter as any);
