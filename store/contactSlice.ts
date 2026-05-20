import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  company?: string
  phone?: string
  service?: string
  message?: string
}
interface ContactState {
  submitting: boolean
  lastSubmitted?: ContactFormData
}

const initialState: ContactState = { submitting: false }

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    submitStart(state) { state.submitting = true },
    submitSuccess(state, action: PayloadAction<ContactFormData>) {
      state.submitting = false as any
      state.lastSubmitted = action.payload
    }
  }
})

export const { submitStart, submitSuccess } = contactSlice.actions
export default contactSlice.reducer
