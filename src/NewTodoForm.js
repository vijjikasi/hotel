import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import './App.css';



function NewTodoForm({ task, createTodo }) {
    const { v4: uuidv4 } = require('uuid');
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

  return (
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
  );
}

export default NewTodoForm;
