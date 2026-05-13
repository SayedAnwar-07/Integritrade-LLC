'use client'

import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import uiReducer from './uiSlice'
import contactReducer from './contactSlice'
import routeReducer from './routeSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    contact: contactReducer,
    route: routeReducer, 
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
