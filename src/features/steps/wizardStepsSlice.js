import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    step: 1,
    imagePreview: null
}

export const stepsSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload
        },
        setImagePreview: (state, action) => {
            state.imagePreview = action.payload
        }
    }
})

export const { setStep } = stepsSlice.actions
export default stepsSlice.reducer