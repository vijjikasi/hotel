import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const App = () => {
  const [user,setUser] = useState({
    username:"",
    email:'',
    password:'',
    confirmPassword:'',
  })
  const {username,email,password,confirmPassword} = user;
  const changeHandler = e => {
    setUser({...user,[e.target.name]:e.target.value})
  }
  const submitHandler = e => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(user);
    }
    else {
      console.log("password are not matching");
    }
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <input type ="text" value = {username} name = "username" onChange = {changeHandler}/><br/>
        <input type ="email" value = {email} name = "email" onChange = {changeHandler}/><br/>
        <input type ="password" value = {password} name = "password" onChange = {changeHandler}/><br/>
        <input type ="password"  value = {confirmPassword} name = "confirmPassword" onChange = {changeHandler}/><br/>
        <input type="submit" name="submit" />
        </form>
      </center>
      <Link to='/signup'>SignUp</Link><br/>
      <Link to='/'>HomePage </Link>
    </div>
  )
}

export default App
