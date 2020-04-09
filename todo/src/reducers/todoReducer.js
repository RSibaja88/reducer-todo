export const initalTodoState = {
    item: 'Learn about Reducers',
    completed: false,
    id: Math.random()
};

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK_ITEM":
            return {
                ...state,
                item: action.payload, completed: false, id: Math.random()
            };
        case "TOGGLE_COMPLETE":
            return {
                ...state.map(item => {
                    if(item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                    return item;
                })
            };
        case "CLEAR_COMPLETE":
            return {
                ...state.filter(item => {
                    return !item.completed;
                })
            };
            default:
            return state;
    };
};