import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/col';

function App() {
return (
	<div style={{ display: 'block',
				width: 700, padding: 30 }}>
	          <h4>React-Bootstrap Container Component</h4>
	
               <Container
		       style={{
		       backgroundColor: 'white', 
               borderRadius:"1px", 
               borderColor:"black",
               textAlignn:"center",
               height:"40px",
               width:"138px"
		       }}
	           >
		      <h3>Sample Text, Greetings from GeeksforGeeks</h3>
	          </Container>
              <Container
		        style={{
		        backgroundColor: 'white', 
                borderRadius:"1px", 
                borderColor:"black",
                textAlign:"center"
		        }}
	            >
		        <h3>Sample Text, Greetings from GeeksforGeeks</h3>
	           </Container>
      <Link to='/bs'>Bs</Link><br/>
      <Link to='/'>HomePage</Link>
	</div>
);
}
export default App
