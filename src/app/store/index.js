import { configureStore } from '@reduxjs/toolkit'

import modalSlice from './slices/modal.slice'
import todoReducer from './slices/todo.slice'

const store = configureStore({
    reducer: {
      todo: todoReducer,
      modal: modalSlice,
    }
  })
  
  export default store