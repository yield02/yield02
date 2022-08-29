import { SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT } from "./constants";


const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT: 
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO_INPUT: 
        
        state.todos.splice(action.payload, 1)

            return {
                ...state
            }    
        default:
            throw new Error('Invalid action type')
            break;
    }
}


export { initState }
export default reducer;