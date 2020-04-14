import React from 'react';
import "./Todo.css";

export function Todo({dispatch, item}) {

    const toggleComplete = id => {
        dispatch({ type: "TOGGLE_COMPLETE", payload: id })
      };

    return (
        <div>
            <h3 className={item.completed ? 'complete' : ''}
            onClick={(e) => {
                e.preventDefault()
                toggleComplete(item.id)
            }}> {item.item}</h3>
        </div>
    );
};

