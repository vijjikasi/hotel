import React from 'react'
import {Link} from 'react-router-dom';

const HelloWorld = () => {
  return (
    <div>
      <center>
        <button onClick={() => console.log("clicked")}>Click Here</button>
        </center>
    

          <Link to='/onclick'>OnClick</Link><br/>
          <Link to='/'>HomePage</Link>
        
    </div>
  )
}

export default HelloWorld