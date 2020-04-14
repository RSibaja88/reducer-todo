import React, { useReducer } from 'react';
import './App.css';
import { initialState, todoReducer } from './reducers/todoReducer';
import {TodoList} from './components/TodoList';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // const addTodo = (newTodo) => {
  //   const newTodos = {
  //     item: newTodo,
  //     completed: false,
  //     id: Date.now()
  //   }
  //   dispatch({ type: "ADD_TODO_ITEM", payload: newTodos })
  // };

  const toggleComplete = id => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id })
  };

  // const clearComplete = id => {
  //   dispatch({ type: "CLEAR_COMPLETE" })
  // };

  return (
    <div className="App">
      <div className="tagline">Click on a todo to mark as COMPLETE!<br />
      Click a complete todo to CLEAR it from the list!</div>
      <TodoList
        state={state}
        toggleComplete={toggleComplete} 
        dispatch={dispatch}
        />
      
    </div>
  );
}

export default App;
