import React,{useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function App () {
  const [first,setFirst]=useState(true);
  const[second,setSecond]=useState(true);

  const handleChange=(data)=>{
    if(data==="first")
    {
      if(first===true){
        console.log(data,"our value")
      }
      setFirst(!first)
    }
    if(data==='second')
    {
      if(second===true){
        console.log(data,"our value")
      }
      setSecond(!second)
    }

  }
  return(
    <div className="App">
      <center>
      <input type="checkbox" value={first} onChange={()=>handleChange("first")}/>Regular Fares<br/>
      <input type="checkbox" value={second} onChange={()=>handleChange("second")}/>Second
      </center>
      <Link to='/checkbox'>CheckBox</Link><br/>
      <Link to='/'>HomePage</Link>
    </div>

  );
}
export default App;