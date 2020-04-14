export const initialState = [
        {
        item: 'Learn About Reducers',
        completed: false,
        id: Date.now()
        }
    ];

export function todoReducer(state, action) {
    switch(action.type) {
        case "ADD_TODO_ITEM":
            return [
                ...state,
                {item: action.payload,
                completed: false,
                id: Date.now()}
            ];
        case "TOGGLE_COMPLETE":
            return state.map((item) => {
                    return item.id === action.payload ?
                    {...item, completed: !item.completed} :
                    item
                })
            
        case "CLEAR_COMPLETE":
            return state.filter((item) => !item.completed)
                    
            default:
            return state;
    };
};
