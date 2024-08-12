import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    open: false
  },
  reducers: {
    updateState: (state, { payload }) => ({ ...state, ...payload })
  },
})

export const { updateState } = modalSlice.actions
export default modalSlice.reducer