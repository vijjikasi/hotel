import React from 'react'
import {Link} from 'react-router-dom';
import './index.css';


const HomePage = () => {
  return (
    <div className="container">
        <center>
        <h1 style={{color:"Green"}}>Welcome To Home Page </h1>
        </center>
        <ul>                                                                                                                                               
        <Link to='/'></Link><br/>
        <Link to='/selectform' className="Link"><li>SelectForm</li></Link><br/>
        <Link to='/radiobutton' className="Link"><li>RadioButton</li></Link><br/>
        <Link to='/calender' className="Link"><li>Calender</li></Link><br/>
        <Link to='/pages' className="Link"><li>Pages</li></Link><br/>
        <Link to='/checkbox' className="Link"><li>CheckBox</li></Link><br/>
        <Link to='/controller' className="Link"><li>Controller</li></Link><br/>
        <Link to='/Bs' className="Link"><li>Bs</li></Link><br/>
        <Link to='/hero' className="Link"><li>Hero</li></Link><br/>
        <Link to='/showhide' className="Link"><li>ShowHide</li></Link>
        </ul>
    </div>
  )
}

export default HomePage
