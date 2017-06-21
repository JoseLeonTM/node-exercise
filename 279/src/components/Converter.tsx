
import {Component, PropTypes} from 'react';

class Converter extends Component{
    render(){
        let curs = this.props.currencies.map(
            (cur) =>{
                return <option value={cur}>{cur}</option>
            }
        );       
        return(
            <div id="converter">
                <h3>Converter</h3>
                <select>
                    {curs}
                </select>
                <div className="amount">
                    <input type="number" min="0.01" required />
                </div>                
                <h4> To </h4>
                <select>
                    {curs}
                </select>
                <div className="amount">
                    <p id="convResult"></p>
                </div>
            </div>
        )
    }
}
Converter.propTypes={
    currencies: PropTypes.array.isRequired
}
export default Converter;