import './App.css';
import React from "react";
import { useState, useReducer} from "react";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";


function App() {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
          task: ""
        }
      );
      const handleChange = evt => {
        setUserInput({ [evt.target.name]: evt.target.value });
      };
      
      const handleSubmit = evt => {
        evt.preventDefault();
        const newRoom = { id: uuidv4(), task: userInput.task, completed: false };
        createTodo(newRoom);
        setUserInput({ task: "" });
      };  
    


    const { v4: uuidv4 } = require('uuid');
    const [todos, setTodos] = useState([
]);
      const create = newRoom => {
        console.log(newRoom);
        setTodos([...todos, newRoom]);
        };
    
      const remove = id => {
        setTodos(todos.filter(todo => todo.id !== id));
      };
    
      const update = (id, updtedTask) => {
        const updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, task: updtedTask };
          }
          return todo;
        });
        setTodos(updatedTodos);
      };
    
      const toggleComplete = id => {
        const updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
        setTodos(updatedTodos);
      };
    
      const todosList = todos.map(todo => (
        <Todo
          toggleComplete={toggleComplete}
          update={update}
          remove={remove}
          key={todo.id}
          todo={todo}
        />
      ));

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [room, setRoom] = useState(0);
    const [roomArr,setRoomArr] = useState([]);
    const [state, setState] = useState({});
    const [childrenValues, setChildrenValues] = useState([]);
    const [childrenArr, setChildrenArr] = useState([]);


 
    //Adult Number

    const handleAdultsChange = (e) => {
        setAdults(e.target.value);
    };

    const handleAdultsAdd = () => {
        setAdults(Number(adults) + 1);
    };

    const handleAdultsReduce = () => {
        setAdults(Number(adults) - 1);
    };

    //Children Number

    const handleChildrenChange = (e) => {
      setChildren(e.target.value);
      setChildrenArr(new Array(children + 1).fill());
  };
  const handleChildrenAdd = () => {
      setChildren(Number(children) + 1);
      setChildrenArr(new Array(children + 1).fill());
  };
  const handleChildrenReduce = () => {
      setChildren(Number(children) - 1);
      setChildrenArr(new Array(children - 1).fill());
  };

  //Rooms Number

  const handleRoomsChange = (e) => {
      setRoom(e.target.value);
      setRoomArr(new Array(room + 1).fill());
  };
  const handleRoomsAdd = () => {
      setRoom(Number(room) + 1);
      setRoomArr(new Array(room + 1).fill());
  };
  const handleRoomsReduce = () => {
      setRoom(Number(room) - 1);
      setRoomArr(new Array(children - 1).fill());
  };
 //Children Age

  const handleChildrenAge = (event) => {
      const name = event.target.name;
      setState({
          ...state,
          [name]: event.target.value,
      });
      setChildrenValues([...childrenValues, state]);
  };

  const handleApply = () => {
       if(room != null) {
        console.log({adults});
        console.log({children});
       }
       else{
        console.log("null");
       }
  }
  
  const handleReset = () => {
    setAdults(0);
    setRoom(0);
    setChildren(0);
    setChildrenArr(new Array(0).fill(0));
    console.clear();
    
  }
  const handleAddRoom = () => {
    if (room === 0) {
        alert("Please Select room");
    }else if(room === 1) {
        console.log({room},{adults},{children});
    }else if(room === 2){
        console.log({room},{adults},{children});
    }else if(room === 3){
        console.log({room},{adults},{children});
    }else if(room === 4){
        console.log({room},{adults},{children});
    }else if(room === 5){
        console.log({room},{adults},{children});
    }else if(room === 6){
        console.log({room},{adults},{children});
    }else if(room === 7){
        console.log({room},{adults},{children});
    }else if(room === 8){
        console.log({room},{adults},{children});
    }else if(room === 9){
        console.log({room},{adults},{children});
    }else if(room === 10){
        console.log({room},{adults},{children});
    }


    
    
  }
  
  return (
      <><div>
            <form className="NewTodoForm" onSubmit={handleSubmit}>
           <label htmlFor="task">Room Details</label>
            <input
              value={userInput.task}
                onChange={handleChange}
              id="task"
               type="text"
              name="task"
               placeholder="New Room"
             />
            <button >Add Room</button>
            </form>

            <div className="TodoList">
           <h1 style={{textAlign:"Center"}}>Hotel <span>Rooms & Guest details</span></h1> 
            <ul>{todosList}</ul>
            <NewTodoForm createTodo={create} />
            
          <div className='col'>
              <h3 className='head'>Room:</h3>
              <div className="row">
                  <div>
                      <button className="button" style={{width:"20px"}} disabled={room === 1} onClick={handleRoomsReduce}>-</button>
                  </div>
                  <div>
                      <input className='text' style={{width:"20px"}} onChange={handleRoomsChange} value={room.toString()} type="text" />
                  </div>
                  <div>
                      <button className="button" style={{width:"20px"}}  disabled={room === 30} onClick={handleRoomsAdd}>+</button>
                  </div>
              </div>
              <h3 className='head'>Adults:</h3>
              <div className="row">
                  <div>
                      <button className="button" style={{width:"25px"}}  disabled={adults === 1} onClick={handleAdultsReduce}>-</button>
                  </div>
                  <div>
                      <input className='text' style={{width:"20px"}} onChange={handleAdultsChange} value={adults.toString()} type="text" />
                  </div>
                  <div>
                      <button className="button" style={{width:"25px"}} disabled={adults === 10} onClick={handleAdultsAdd}>+</button>
                  </div>
              </div>

              <h3 className='head'>Children:</h3>
              <div className="row">
                  <div>
                      <button className="button" style={{width:"20px"}} disabled={children === 1} onClick={handleChildrenReduce}>-</button>
                  </div>
                  <div>
                      <input className='text' style={{width:"20px"}} onChange={handleChildrenChange} value={children.toString()} type="text" />
                  </div>
                  <div>
                      <button className="button" style={{width:"20px"}} disabled={children === 10} onClick={handleChildrenAdd}>+</button>
                  </div>
              </div>
          </div>
          <div>


          </div>
              <div children={children}>
                  <span className='text2' style={{fontSize:"12px",color:"black",fontWeight:"800"}}>CHILD AGE</span><span className='text3' style={{fontSize:"12px",color:"black",fontWeight:"800"}}>(12Y and below)</span>
              </div>
          
          <div children={children}>
              {childrenArr.map((el, index) => {
                  return (
                      <select className='select' style={{margin:"5px"}}
                          onChange={handleChildrenAge}
                          defaultValue={0}
                          name={`${index + 1}select`}>
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                          <option value={11}>11</option>
                          <option value={12}>12</option>
                      </select>
                  );
              })}
          </div>
          <div className="col">
              <div className="row">
                 <div children={children}>
                 <button onClick={handleReset} className="reset" style={{width:"80px",height:"20px",marginRight:"10px"}}>
                          Reset
                    </button>
                    <button onClick={handleApply} className="apply" style={{width:"50px",height:"20px",marginRight:"10px"}}>
                          Apply
                    </button>
                    <button onClick={handleAddRoom} className="add" style={{width:"80px",height:"20px",marginRight:"10px"}}>
                          AddRoom
                    </button>
                    </div>
                </div>
            </div>     
          </div>
    </div>
        
</>
);
}
export default App