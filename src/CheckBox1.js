import React,{useState} from 'react';
import './App.css';

function App () {
  const [child1,setChild1]=useState(true);
  const [child2,setChild2]=useState(true);
  const [child3,setChild3]=useState(true);
  const [child4,setChild4]=useState(true);
  const [child5,setChild5]=useState(true);

  const handleChange=(age)=>{
    if(age==="child1")
    {
      if(child1===true){
        console.log(age,"One year")
      }
      setChild1(!child1)
    }
    if(age==="child2")
    {
      if(child2===true){
        console.log(age,"Two year")
      }
      setChild2(!child2)
    }
    if(age==="child3")
    {
      if(child3===true){
        console.log(age,"Three year")
      }
      setChild3(!child3)
    }
    if(age==="child4")
    {
      if(child4===true){
        console.log(age,"Four year")
      }
      setChild4(!child4)
    }
    if(age==="child5")
    {
      if(child5===true){
        console.log(age,"Five year")
      }
      setChild5(!child5)
    }


  }
  return(
    <div className="App">
      <div className="col">
      <center>
      <input type="checkbox" value={child1} onChange={()=>handleChange("child1")}/>child one<br/>
      <input type="checkbox" value={child2} onChange={()=>handleChange("child2")}/>child Two<br/>
      <input type="checkbox" value={child3} onChange={()=>handleChange("child3")}/>child Three<br/>
      <input type="checkbox" value={child4} onChange={()=>handleChange("child4")}/>child Four<br/>
      <input type="checkbox" value={child5} onChange={()=>handleChange("child5")}/>child Five<br/>
      </center>
      </div>
    </div>

  );
}
export default App;