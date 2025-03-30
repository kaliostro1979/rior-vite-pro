import { configureStore } from '@reduxjs/toolkit'
import stepWizard from '../features/steps/wizardStepsSlice.js'

export const store = configureStore({
    reducer: {
        stepWizard: stepWizard
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})