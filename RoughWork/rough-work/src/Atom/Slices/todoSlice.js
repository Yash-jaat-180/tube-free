import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {id: 1, content: "Hello world"},
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                content: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export default todoSlice.reducer
export const {addTodo, removeTodo} = todoSlice.actions;