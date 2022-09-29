import './App.css';
import React from "react";
import { useState, useEffect } from "react";

export default function Hotel() {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [roomState, setRoomState] = useState([]);
    const [roomArr,setRoomArr] = useState([]);
    const [roomValues,setRoomValues]=useState([]);
    const [state, setState] = useState({});
    const [childrenValues, setChildrenValues] = useState([]);
    const [childrenArr, setChildrenArr] = useState([]);
    const [setGuestNumber, setRoomNumber] = useState([]);


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
      setChildrenArr(new Array(children + 1).fill(0));
  };
  const handleChildrenAdd = () => {
      setChildren(Number(children) + 1);
      setChildrenArr(new Array(children + 1).fill(0));
  };
  const handleChildrenReduce = () => {
      setChildren(Number(children) - 1);
      setChildrenArr(new Array(children - 1).fill(0));
  };

  //Rooms Number

  const handleRoomsChange = (e) => {
      setRooms(e.target.value);
      setRoomArr(new Array(rooms + 1).fill(0));
  };
  const handleRoomsAdd = () => {
      setRooms(Number(rooms) + 1);
      setRoomArr(new Array(rooms + 1).fill(0));
  };
  const handleRoomsReduce = () => {
      setRooms(Number(rooms) - 1);
      setRoomArr(new Array(children - 1).fill(0));
  };

  //Reset 

  const handleReset = () => {
      setAdults(0);
      setRooms(0);
      setChildren(0);
      setChildrenArr(new Array(0).fill(0));
      setRoomArr(new Array(0).fill(0));
  };
  


  //Children Age

  const handleChildrenAge = (event) => {
      const name = event.target.name;
      setState({
          ...state,
          [name]: event.target.value,
      });
      console.log(state);
      setChildrenValues([...childrenValues, state]);
  };
  const handleRoomCount = (event) => {
    const name1 = event.target.name1;
    setRoomState({...roomState,[name1]: event.target.value});
    console.log(roomState);
    setRoomValues([...roomValues, roomState]);
  };
  useEffect(() => {
      console.log(state);
  }, [state]);
  useEffect(() => {
      console.log(roomState)
  },[roomState]);
  console.log(childrenValues)
  console.log(childrenArr)
  console.log(roomValues)
  console.log(roomArr)

  const handleApply = () => {
      setGuestNumber(children + adults);
      setRoomNumber(rooms);
  };
  const handleAnotherRoom = () => {
    setAdults(0);
      setRooms(0);
      setChildren(0);
      setChildrenArr(new Array(0).fill(0));
      setRoomArr(new Array(0).fill(0));
  };
  return (
      <><div>
        
          <h1 className='total' style={{fontSize:"20px"}}>Rooms:<span>{rooms}</span>Adults:<span>{adults}</span>Children:<span>{children}</span></h1><br/>
            
          <div className='col'>
              <h3 className='head'>Rooms:</h3>
              <div className="row">
                  <div>
                      <button className="button" style={{width:"20px"}} disabled={rooms === 0} onClick={handleRoomsReduce}>-</button>
                  </div>
                  <div>
                      <input className='text' style={{width:"20px"}} onChange={handleRoomsChange} value={rooms.toString()} type="text" />
                  </div>
                  <div>
                      <button className="button" style={{width:"20px"}}  disabled={rooms === 30} onClick={handleRoomsAdd}>+</button>
                  </div>
              </div>
              <h3 className='head'>Adults:</h3>
              <div className="row">
                  <div>
                      <button className="button" style={{width:"25px"}}  disabled={adults === 0} onClick={handleAdultsReduce}>-</button>
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
                      <button className="button" style={{width:"20px"}} disabled={children === 0} onClick={handleChildrenReduce}>-</button>
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
              {rooms >= 6 && (
                  <div rooms={rooms}>
                      <p className='text3'>Big group? Try for 6+ rooms</p>
                  </div>
              )}
          </div>

          {childrenArr.length >= 1 && (
              <div children={children}>
                  <span className='text2' style={{fontSize:"12px",color:"black"}}>CHILD AGE:</span><span className='text3' style={{fontSize:"12px"}}>12Y and below</span>
              </div>
          )}
          <div children={children}>
              {childrenArr.map((el, index) => {
                  console.log(index);
                  return (
                      <select className='select' style={{margin:"5px"}}
                          onChange={handleChildrenAge}
                          defaultValue={0}
                          name={`${index + 1}select`}
                      >
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
            
                    <button onClick={handleReset} className="reset" style={{width:"50px",height:"20px",marginRight:"10px"}}>
                          Reset
                    </button>
                    <button onClick={handleApply} className="apply" style={{width:"50px",height:"20px",marginRight:"10px"}}>
                          Apply
                    </button>
                    <button onClick={handleRoomsAdd} disabled ={rooms === 10} className="add" style={{width:"80px",height:"20px",marginRight:"10px"}}>
                          AddRoom
                    </button>
                    </div>
                    </div>


             </div>     
          </div>
          
        
</>
);
}
