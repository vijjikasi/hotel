import React from 'react'
import {Link} from 'react-router-dom';


class ShowHide extends React.Component
{ 
    state = {
        divcontainer:false,
    }
    render()
    {
        var Handlechange = e => {
            this.setState({divcontainer:!this.state.divcontainer});
        }
        const x=this.state.divcontainer;
        return(
            <div>
                <center>
                <h1>how to show and hide div element</h1>
                <h1>ReactJs Component</h1>
                <hr/>
                <button onClick={Handlechange}>{x?'Hide':'Show'}</button>
                {x &&(<div>my name is vijji</div>)} 
                </center>
                <Link to='ShowHide'>ShowHide</Link><br/>
                <Link to='/'>HomePage </Link>
            </div>
        )
    }
}
export default ShowHide;