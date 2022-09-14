import React,{useState} from 'react'
import {Link} from 'react-router-dom';

function App() {
    const[gender,setGender]=useState("");
    const changeHandler = e => {
        setGender(e.target.value)
    }
  return (
       <div>
            <center>
              <h1>{gender}</h1>
              <input type="Radio" name="gender" value="Male" onChange={changeHandler}/>Male<br/>
              <input type="Radio" name="gender" value="Female" onChange={changeHandler}/>Female
            </center>
           <Link to='/radiobutton'>RadioButton</Link><br/>
           <Link to='/'>HomePage</Link>
        </div>
    )
}
export default App
