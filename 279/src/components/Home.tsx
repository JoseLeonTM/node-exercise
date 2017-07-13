
import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

interface HomeProps {
    actions : any
    value : any,
    dispatch : any
    curs: {
        currencyData: {
            rates: {
                [key: string]: number
            },
        }
        date: Date
        isRequesting : boolean
    };
};
interface HomeState {};

class HomeComponent extends React.Component<HomeProps,HomeState>{
    render(){
        var {isRequesting} =this.props.curs;
        return(
            <div id="home">
                <nav>
                    <ul>
                        <li><label hidden={!isRequesting}>Converter</label><Link hidden={isRequesting} to="./converter">Converter</Link></li>
                        <li><label hidden={!isRequesting}>Transaction</label><Link hidden={isRequesting} to="./transaction">Transaction</Link></li>
                        <li><label hidden={!isRequesting}>History</label><Link hidden={isRequesting} to="./history">History</Link></li>
                    </ul>
                </nav>
            </div>            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        curs: state.curs
    }
}
export default connect( 
    mapStateToProps,
    null  
)(HomeComponent as any);
