import React,{useState} from 'react'
import './App.css';
import {Link} from 'react-router-dom';

function App () {
  const [select,setSelect]=useState();
  return(
    <div>
      <center>
        <h1>{select}</h1>
       <select value={select} onChange={e=>setSelect(e.target.value)}>
        <option></option>
        <option>Apple</option>
        <option>banana</option>
        <option>carrot</option>

       </select>
      </center>
      <Link to='/selectform'>SelectForm</Link><br/>
      <Link to='/'>HomePage</Link>
    </div>
  )
}
export default App