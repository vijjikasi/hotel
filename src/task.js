import React,{useState} from 'react'

const App = () => {
  const[data,setData]=useState("");
  const[child,setChild]=useState("");
  return(
    <div style={{backgroundColor:"darkblue",backgroundSize:"cover"}}>
      <center>
        <h1 style={{color:"darkgrey",fontWeight:"bold",fontSize:"18px"}}>ROOMS & GUESTS: 1Room {data} {child}</h1>
        <h4 style={{color:"lightgrey",fontSize:"15px", texAlign:"Center", margin:"5px"}}>ROOMS</h4>
        <select value={data} onChange={e=>setData(e.target.value)}>
        <option>0</option>
        <option>Room1</option>
        <option>Room2</option>
        <option>Room3</option>
        <option>Room4</option>
        <option>Room5</option>
        <option>Room6</option>
        <option>Room7</option>
        <option>Room8</option>
        <option>Room9</option>
        </select>
        <br/>
        <h4 style={{color:"lightgrey",fontSize:"12px", texAlign:"Center", margin:"5px"}}>ADULTS(12Y+)</h4>
        <select value={data} onChange={e=>setData(e.target.value)}>
        <option>0</option>
        <option>1Adult</option>
        <option>2Adult</option>
        <option>3Adult</option>
        <option>4Adult</option>
        <option>5Adult</option>
        <option>6Adult</option>
        <option>7Adult</option>
        <option>8Adult</option>
        <option>9Adult</option>
        </select>
        <br/>
        <h4 style={{color:"lightgrey",fontSize:"12px", texAlign:"Center", margin:"5px"}}>CHILDREN(Age 12y & below)</h4>
        <select value={child} onChange={e=>setChild(e.target.value)}>
        <option>0</option>
        <option>1Childern</option>
        <option>2Childern</option>
        <option>3Childern</option>
        <option>4Childern</option>
        <option>5Childern</option>
        </select>
        <br/>
        <button style={{backgroundColor:"blue", color:"white",borderRadius:"10px", margin:"5px"}} onClick={() => console.log(data,child)}>Apply</button>
      </center>
    </div>
  )

}
export default App