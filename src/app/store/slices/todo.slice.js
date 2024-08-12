import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    AddTodo(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      })
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
  },
})

export const { AddTodo, toggleTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer