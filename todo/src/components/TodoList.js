import React, { useReducer } from 'react';
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { todoReducer, initialState } from "../reducers/todoReducer";

// import "./TodoList.css";

export function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log("props to Todo List: ", state);  

     
    return (
        <div className="todoPop">
            <TodoForm
                dispatch={dispatch}
        />
            {state.map((item) => {
                  return <Todo
                        item={item}
                        key={item.id}
                        dispatch={dispatch}
                        /> 
                                                               
            })}
           
        </div>
      
    )
}
          


