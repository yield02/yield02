import { SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT } from "./constants";


export const setTodoInPut = payload => ({
    type: SET_TODO_INPUT,
    payload,
})

export const addTodoInPut = payload => ({
    type: ADD_TODO_INPUT,
    payload,
})

export const deleteTodoInPut = payload => ({
    type: DELETE_TODO_INPUT,
    payload,
})