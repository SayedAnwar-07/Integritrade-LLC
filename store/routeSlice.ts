import { createSlice } from '@reduxjs/toolkit'

interface RouteState {
  isLoading: boolean
}

const initialState: RouteState = {
  isLoading: false,
}

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true
    },
    stopLoading(state) {
      state.isLoading = false
    },
  },
})

export const { startLoading, stopLoading } = routeSlice.actions
export default routeSlice.reducer