
import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

interface HomeProps {
    actions : any
    value : any,
    dispatch : any
};
interface HomeState {};

class HomeComponent extends React.Component<HomeProps,HomeState>{
    render(){
        return(
            <div id="home">
                <nav>
                    <ul>
                        <li><Link to="./converter">Converter</Link></li>
                        <li><Link to="./spend">Spend</Link></li>
                        <li><Link to="./history">History</Link></li>
                    </ul>
                </nav>
            </div>            
        )
    }
}

export default connect(    
)(HomeComponent);
