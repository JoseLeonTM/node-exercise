
import * as React from 'react';
import {Link} from 'react-router-dom';

interface HomeProps {};
interface HomeState {};

class Home extends React.Component<HomeProps,HomeState>{
    
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
export default Home;
