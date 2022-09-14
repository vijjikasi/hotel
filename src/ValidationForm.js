import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const App = () => {
    const [data,setData] = useState({
        username:"",
        password:""
    })
    const {username,password} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e =>{
      e.preventDefault();
    }
  return (
    <div>
      console.log(data)
      <center>
        <form onSubmit={submitHandler}>
        <input type="text" name="username" value={username} onChange = {changeHandler}/><br/>
        <input type="password" name="password" value={password} onChange = {changeHandler}/><br/>
        <input type="submit" name="submit"/>
        </form>
      </center>
      <Link to='/validationform'>ValidationForm</Link><br/>
      <Link to='/'>HomePage </Link>
    </div>
  )
}

export default App

