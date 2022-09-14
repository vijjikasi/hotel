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
    if (username.length <= 5){
      alert("username must be at least 5 character");
    }
    else if (password !== confirmPassword){
      alert("passwords are not matching");
    }
    else{
      console.log(user);
    }
  }
  return (
    <div>
      <center>
        <form autoComlete="off" onSubmit={submitHandler}>
        <input type ="text" value = {username} name = "username" onChange = {changeHandler}/><br/>
        <input type ="email" value = {email} name = "email" onChange = {changeHandler}/><br/>
        <input type ="password" value = {password} name = "password" onChange = {changeHandler}/><br/>
        <input type ="password"  value = {confirmPassword} name = "confirmPassword" onChange = {changeHandler}/><br/>
        <input type="submit" name="submit" />
        </form>
      </center>
      <Link to='/loginform'>LoginForm</Link><br/>
      <Link to='/'>HomePage </Link>
    </div>
  )
}

export default App
