import React, { useState } from 'react';
import "./TodoForm.css";

export function TodoForm({dispatch}) { 
    const [newTodo, setTodo] = useState("");
    const addTodo = (newTodo) => {
        dispatch({ type: "ADD_TODO_ITEM", payload: newTodo })
        setTodo('');
    };

       const clearComplete = id => {
    dispatch({ type: "CLEAR_COMPLETE" })
  };
  
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(newTodo);
        setTodo("");
    };

    const handleChange = e => {
        e.preventDefault();
        setTodo(e.target.value);
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="topInput">
                    <label className="addNew">Add a Task to Your List!</label><br/>
                    <input className="inputBar"
                        onChange={handleChange}
                        type="text"
                        name="newItem"
                        value={newTodo}
                /></div>
                <div className="buttonBundle">
                    <button>Add</button>
                    <button onClick={clearComplete}>Clear Completed</button>
                </div>
            </form>
        </div>
    )

}


