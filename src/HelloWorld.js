import React from 'react'
import {Link} from 'react-router-dom';

const HelloWorld = () => {
    let name ="Vijji";
  return (
    <div>
      <center>
           <h1>Hello World!!</h1>
           <h1>Welcome {name}</h1>
        </center>
    

          <Link to='/helloworld'>HelloWorld</Link><br/>
          <Link to='/'>HomePage</Link>
        
    </div>
  )
}

export default HelloWorld