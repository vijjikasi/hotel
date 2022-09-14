import React,{useState} from 'react'
import Container from 'react-bootstrap/col';

const App = () => {
    const[data,setData]=useState({
    })
    const[data1,setData1]=useState({

    })
    const[date,setDate]=useState({

    })
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const [first,setFirst]=useState(true);
  const[second,setSecond]=useState(true);

  const handleChange=(data)=>{
    if(data==="first")
    {
      if(first===true){
        console.log(data,"our value")
      }
      setFirst(!first)
    }
    if(data==='second')
    {
      if(second===true){
        console.log(data,"our value")
      }
      setSecond(!second)
    }

  }
    console.log("Date",date);
    return (
        <div style={{"backgroundColor":"darkblue","height":"100vh"}}>
            <center>
              <h1 style={{color:"white", padding:"5px", textAlign:"center"}}>make MY trip</h1>
              <div style={{color:"darkgrey"}}>
                   <input type="Radio" name="mytrip" value="ONEWAY"  onChange={changeHandler}/>ONEWAY
                   <input type="Radio" name="mytrip" value="ROUNDTRIP" onChange={changeHandler}/>ROUNDTRIP
                   <input type="Radio" name="mytrip" value="MULTICITY" onChange={changeHandler}/>MULTICITY
              </div>
              <br/>
                 <div>
                      <Container
		              style={{ 
                      backgroundColor:"purple",
                       textAlign:"center",
                       height:"40px",
                       width:"138px",
                       margin:"20px"
		                }}
	                    >
		                <h3 style={{color:"white", fontSize:"15px", textAlign:"center",marginTop:"2px"}}>From</h3>
                      <select style={{width:"138px", textAlign:"center"}} value={data} onChange={e=>setData(e.target.value)}>
                       <option></option>
                       <option>Austrila</option>
                       <option>Dubai</option>
                       <option>U.S.A</option>
                      </select> 
                      </Container>
                      </div>
                      <div>
                       <Container
		               style={{ 
                       backgroundColor:"purple",
                       textAlign:"center",
                       height:"40px",
                       width:"138px",
                       margin:"20px"
		               }}
	                    >
                      <h3 style={{color:"white", fontSize:"15px", textAlign:"center",marginTop:"2px"}}>To</h3>
                      <select style={{width:"138px", textAlign:"center"}} value={data1} onChange={e=>setData1(e.target.value)}>
                       <option></option>
                       <option>Austrila</option>
                       <option>Dubai</option>
                       <option>U.S.A</option>
                      </select>
                       </Container>
                   </div>
                     <div>
                     <Container
		               style={{ 
                       backgroundColor:"purple",
                       textAlign:"center",
                       height:"40px",
                       width:"138px",
                       margin:"20px"
		               }}
	                    >
                        <h3 style={{color:"white", fontSize:"15px", textAlign:"center",marginTop:"2px"}}>Departure</h3>
                       <input type="date" onChange={(e)=>setDate(e.target.value)}/>
                       </Container>
                     </div>
                     <div>
                     <Container
		               style={{ 
                       backgroundColor:"purple",
                       textAlign:"center",
                       height:"40px",
                       width:"138px",
                       margin:"20px"
		               }}
	                    >
                        <h3 style={{color:"white", fontSize:"15px", textAlign:"center",marginTop:"2px"}}>Return</h3>
                       <input type="date" onChange={(e)=>setDate(e.target.value)}/>
                       </Container>
                     </div>
                     <div>
                        <Container
                            style={{ 
                            backgroundColor:"purple",
                            textAlign:"center",
                            height:"40px",
                            width:"138px",
                            margin:"20px"
                            }}
                        > 
                          <h3 style={{color:"white", fontSize:"15px", textAlign:"center",marginTop:"2px"}}>Fare Types</h3>
                          <input type="checkbox" value={first} onChange={()=>handleChange("first")}/>Regular Fares<br/>
                          <input type="checkbox" value={second} onChange={()=>handleChange("second")}/>Student Fares
                        </Container>
                     </div>
        
            </center>
        </div>

    )
}
export default App