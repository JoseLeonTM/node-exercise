
import * as React from 'react';
import {Link} from 'react-router-dom';
import store from '../store';

interface HomeProps {};
interface HomeState {};
interface HomeType{
    unsubscribe : Function
}

class Home extends React.Component<HomeProps,HomeState> implements HomeType{
    unsubscribe(){}
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({state: store.getState()});
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
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
