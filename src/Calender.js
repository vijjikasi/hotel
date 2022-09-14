import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import "./App.css";

 function App () {
    const[date,setDate]=useState();
     const changeHandler = e =>{
        setDate(e.target.value)
    }
    console.log("Date",date);
  return (
    <div>
        <center>
            <h1>Selected Date is:  {date}</h1>
            <input type="date" onChange={changeHandler}/>
        </center>
        <Link to='/calender'>Calender</Link><br/>
      <Link to='/'>HomePage</Link>

    </div>
  )
}

export default App
