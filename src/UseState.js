import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const HelloWorld = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
      <center>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>Change</button>
        </center>
    

          <Link to='/usestate'>UseState</Link><br/>
          <Link to='/'>HomePage</Link>
        
    </div>
  )
}

export default HelloWorld