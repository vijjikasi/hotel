import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './App.css';



const App = () => {
    const[user,setUser]=useState({
        name:"",
        email:"",
        country:"",
        description:""

    });
    const{name,email,country,description}=user;
    const changeHandler = e => {
        setUser({...user,[e.target.name]:e.target.value})
    }
      const submitHandler = e => {
        e.preventDefault();
        console.log(user);
      }
  return (
        <div className="App">
            <center>
               
                  <form onSubmit={submitHandler}>
                     <label style={{color:"white"}}>
                        Name:<input name="name" value={name} onChange={changeHandler}/>
                     </label>
                     <br/>
                     <hr/>
                     <label style={{color:"white"}}>
                        Email:<input name="email" value={email} onChange={changeHandler}/>
                     </label>
                     <br/>
                     <hr/>
                     <label style={{color:"white"}}>
                       Description:<textarea onChange={changeHandler} name="description" value={description}/>
                      </label>
                     <br/>
                     <hr/>
                     <label style={{color:"white"}}>
                        Country:<select name="country" value={country}  onChange={changeHandler}>
                        <option></option>
                        <option >India</option>
                        <option >U.S.A</option>
                        <option >Austrila</option>
                        <option >Canada</option>
                        </select>
                     </label>
                     <br/>
                     <hr/>
                     <label style={{color:"white"}}> Gender:
                     <div>
                     <input type="Radio" name="gender" value="Male"  onChange={changeHandler}/>Male
                     <input type="Radio" name="gender" value="Female" onChange={changeHandler}/>Female
                     <input type="Radio" name="gender" value="Other" onChange={changeHandler}/>Other
                     </div>
                     </label>
                     <br/>
                     <hr/>
                     <button>Submit</button>
                  </form>
            
          </center>
          <Link to='/controller'>Controller</Link><br/>
          <Link to='/'>HomePage</Link>
        </div>
    )

}
export default App
