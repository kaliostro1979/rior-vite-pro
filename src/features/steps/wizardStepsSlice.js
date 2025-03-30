import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getFloorPlan = createAsyncThunk('wizard/getFloorPlan', (preview) => preview)
export const getDesign = createAsyncThunk('wizard/getDesign', (preview) => preview)

const initialState = {
    step: 1,
    floorPlan: null,
    design: null
}

export const stepsSlice = createSlice({
    name: 'wizard',
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFloorPlan.fulfilled, (state, action) => {
            state.floorPlan = action.payload
        })
        builder.addCase(getDesign.fulfilled, (state, action) => {
            state.design = action.payload
        })
    }
})

export const { setStep } = stepsSlice.actions
export default stepsSlice.reducer