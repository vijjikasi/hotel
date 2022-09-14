import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SelectForm from './SelectForm';
import RadioButton from './RadioButton';
import Calender from './Calender';
import Pages from './Pages';
import CheckBox from './CheckBox';
import Controller from'./Controller';
import Bs from './Bs';
import Hero from './Hero';
import ShowHide from './ShowHide';


 function App () {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/selectform' element={<SelectForm/>}/>
          <Route path='/radiobutton' element={<RadioButton/>}/>
          <Route path='/calender' element={<Calender/>}/>
          <Route path='/pages' element={<Pages/>}/>
          <Route path='/checkbox' element={<CheckBox/>}/>
          <Route path='/controller' element={<Controller/>}/>
          <Route path='/Bs' element={<Bs/>}/>
          <Route path='/Hero' element={<Hero/>}/>
          <Route path='/ShowHide' element={<ShowHide/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App