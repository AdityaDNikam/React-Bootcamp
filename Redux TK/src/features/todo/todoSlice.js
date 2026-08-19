import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [{ id: 1, text: "Hello" }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todo.push(todo)
        },
        removeTodos: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload)
        },
        updateTodos: (state, action) => {
            const UpdateTodo = state.todo.find(todo => todo.id === action.payload.id);
            if (UpdateTodo) {
                UpdateTodo.text = action.payload.text
            }
        }
    }
})

export const { addTodos, removeTodos, updateTodos } = todoSlice.actions
export default todoSlice.reducer