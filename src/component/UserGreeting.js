import React, {Component} from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return 
                <div>
                    welcome vijji
                </div>
            
        } else {
            return 
                <div>
                    Welcome lahiq
                </div>
            
        }
        //return (
0oo/            
          //  <div>
            // <div>welcome lahiq</div>
            //<div>welcome vijji</div>
            //</div>
        //)
    }
}
export default UserGreeting