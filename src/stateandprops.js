import React from 'react';
import {Link} from 'react-router-dom';


class App extends React.Component {


    state =  {
        name :"john",
        age: 25
    }
    render() {
        return (
            <div>
                <center>
                    <h4>Welcome {this.state.name}</h4>
                </center>
                <Link to='/stateandProps'>Stateandprops</Link>
                <Link to='/homepage'>HomePage</Link>
      
            </div>
        )
    }
}

export default stateandprops;
