import React,{useState} from 'react'
import Data from './city.json';

const App = () => {
    const[search,setSearch]=useState('');
    return (
        <div>
          <center>
            <h4>Enter your city:</h4>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} style={{"marginBottom":"5px"}}/><br/>
            {Data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city =>{
                return <div style={{"border":"1px solid black","padding":"10px","marginBottom":"2px","maxWidth":"70%"}}>
                    {city.name}
                </div>
            } )}
            </center>
        </div>
    )
}
export default App