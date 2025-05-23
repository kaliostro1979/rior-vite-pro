import {STEPS} from '@/constants';
import {createSlice} from '@reduxjs/toolkit';

import {SLICE_NAME} from './constants';

const initialState = {
    floorPlan: null,
    floorPlanUrl: null,

    design: null,
    designUrl: null,

    details: {
        name: '',
        ceiling_height: '',
        door_height: '',
    },

    // Wizard state
    currentStep: STEPS.floorPlan,
    stepsCompleted: {
        [STEPS.floorPlan]: false,
        [STEPS.design]: false,
        [STEPS.details]: false,
    },

    errors: {
        floorPlan: null,
        design: null,
        details: {},
    },

    isSubmitting: false,
    isSubmitted: false,
    successData: null,
    isCopied: false
};

const wizardSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        setFloorPlan: (state, action) => {
            state.floorPlan = action.payload;
            state.stepsCompleted[1] = !!action.payload;
        },
        setFloorPlanUrl: (state, action) => {
            state.floorPlanUrl = action.payload;
        },
        setDesign: (state, action) => {
            state.design = action.payload;
            state.stepsCompleted[2] = !!action.payload;
        },
        setDesignUrl: (state, action) => {
            state.designUrl = action.payload;
        },
        updateDetails: (state, action) => {
            state.details = {
                ...state.details,
                ...action.payload,
            };

            const requiredFields = ['name', 'dimensions'];
            const allFieldsFilled = requiredFields.every(
                field => state.details[field] && state.details[field].trim() !== ''
            );

            state.stepsCompleted[3] = allFieldsFilled;
        },
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        },
        setStepCompleted: (state, action) => {
            state.stepsCompleted[action.payload.step] = action.payload.completed;
        },
        setErrors: (state, action) => {
            state.errors = {
                ...state.errors,
                ...action.payload,
            };
        },
        clearErrors: state => {
            state.errors = initialState.errors;
        },
        setSubmitting: (state, action) => {
            state.isSubmitting = action.payload;
        },
        setSubmitted: (state, action) => {
            state.isSubmitted = action.payload;
        },
        setSuccessData(state, action){
            state.successData = action.payload
        },
        resetWizard: () => initialState,
        setIsCopyURL: (state, action)=>{
            state.isCopied = action.payload
        }
    },
});

export const {
    setFloorPlan,
    setFloorPlanUrl,
    setDesign,
    setDesignUrl,
    updateDetails,
    setCurrentStep,
    setStepCompleted,
    setErrors,
    clearErrors,
    setSubmitting,
    setSubmitted,
    resetWizard,
    setSuccessData,
    setIsCopyURL
} = wizardSlice.actions;

export default wizardSlice.reducer;
