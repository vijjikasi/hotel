import React,{ useState,useEffect } from 'react'
import {Link} from 'react-router-dom';

function App () {
    const [count,setCount] = useState(0);
    useEffect(() => console.log("clicked"),[count])
  return (
    <div>
      <center>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}> Click me </button>
      </center>
    

        <Link to='/useeffect'>UseEffect</Link><br/>
        <Link to='/'>HomePage</Link>
        
    </div>
  )
}

export default App