import {createAsyncThunk} from '@reduxjs/toolkit';
import {
    setFloorPlan,
    setFloorPlanUrl,
    setDesign,
    setDesignUrl,
    setErrors,
    setSubmitting,
    setSubmitted, setSuccessData,
} from '@/store/slices/steps';

import {
    ACTION_NAME_UPLOAD_FLOOR_PLAN,
    ACTION_NAME_UPLOAD_DESIGN,
    ACTION_NAME_CLEAN_OBJECT_URLS,
    ACTION_NAME_SUBMIT_WIZARD_DATA,
    VALID_TYPES, ACTION_NAME_FETCH_USER_DATA,
} from './constants';
import { MAX_FILE_SIZE } from '@/constants/file';
import api from "@/services/api/axiosInstence.js";

export const uploadFloorPlan = createAsyncThunk(
    ACTION_NAME_UPLOAD_FLOOR_PLAN,
    async (file, {dispatch, rejectWithValue}) => {
        try {
            if (!file) {
                return rejectWithValue('No file selected');
            }

            if (!VALID_TYPES.includes(file.type)) {
                dispatch(
                    setErrors({
                        floorPlan: {
                            heading: "Invalid file type",
                            message: "Invalid file type. Please upload a image file."
                        },
                    })
                );

                return rejectWithValue('Invalid file type');
            }



            if (file.size >= MAX_FILE_SIZE) {
                dispatch(
                    setErrors({
                        floorPlan: {
                            heading: 'File to large',
                            message: 'Max file size should be 2mb'
                        },
                    })
                );

                return rejectWithValue('Wrong file size');
            }

            dispatch(setErrors({
                floorPlan: null,
            }))
            dispatch(setFloorPlan(file));

            const objectUrl = URL.createObjectURL(file);

            dispatch(setFloorPlanUrl(objectUrl));

            return {success: true, objectUrl};
        } catch (error) {
            dispatch(setErrors({floorPlan: 'Failed to upload floor plan.'}));

            return rejectWithValue(error.message);
        }
    }
);

export const uploadDesign = createAsyncThunk(
    ACTION_NAME_UPLOAD_DESIGN,
    async (file, {dispatch, rejectWithValue}) => {
        try {
            if (!file) {
                return rejectWithValue('No file selected');
            }

            if (!VALID_TYPES.includes(file.type)) {
                dispatch(
                    setErrors({
                        design: {
                            heading: "Invalid file type",
                            message: "Invalid file type. Please upload a image file."
                        }
                    })
                );

                return rejectWithValue('Invalid file type');
            }

            if (file.size >= MAX_FILE_SIZE) {
                dispatch(
                    setErrors({
                        design: {
                            heading: 'File to large',
                            message: 'Max file size should be 2mb'
                        },
                    })
                );

                return rejectWithValue('Wrong file size');
            }

            dispatch(setErrors({
                design: null,
            }))
            dispatch(setDesign(file));

            const objectUrl = URL.createObjectURL(file);

            dispatch(setDesignUrl(objectUrl));

            return {success: true, objectUrl};
        } catch (error) {
            dispatch(setErrors({design: 'Failed to upload design.'}));

            return rejectWithValue(error.message);
        }
    }
);

export const cleanupObjectUrls = createAsyncThunk(
    ACTION_NAME_CLEAN_OBJECT_URLS,
    async (_, {getState}) => {
        const state = getState();

        if (state.stepWizard.floorPlanUrl) {
            URL.revokeObjectURL(state.stepWizard.floorPlanUrl);
        }
        if (state.stepWizard.designUrl) {
            URL.revokeObjectURL(state.stepWizard.designUrl);
        }

        return {success: true};
    }
);

// Submit the wizard data
export const submitWizardData = createAsyncThunk(
    ACTION_NAME_SUBMIT_WIZARD_DATA,
    async (_, {dispatch, getState, rejectWithValue}) => {
        try {
            dispatch(setSubmitting(true));

            const state = getState().stepWizard;

            const allStepsCompleted = Object.values(state.stepsCompleted).every(
                step => step === true
            );

            if (!allStepsCompleted) {
                return rejectWithValue('Please complete all steps before submitting.');
            }

            const formData = new FormData();
            formData.append('floor_plan', state.floorPlan);
            formData.append('interior_photo', state.design);

            Object.keys(state.details).forEach(key => {
                formData.append(key, state.details[key]);
            });

           /* await new Promise(resolve => setTimeout(resolve, 1000));*/
            const response = await api.post("/api/design-requests/", formData);
            
            if(response){
                localStorage.setItem("slug", response.data?.slug)
            }
            
            dispatch(setSubmitted(true));
            dispatch(setSuccessData(response));
            return {success: true};
        } catch (error) {
            return rejectWithValue(error.message || 'Failed to submit data');
        } finally {
            dispatch(setSubmitting(false));
        }
    }
);

export const fetchUserData = createAsyncThunk(
    ACTION_NAME_FETCH_USER_DATA,
    async (slug, {dispatch, getState, rejectWithValue}) => {
        try {
            dispatch(setSubmitting(true));

            const state = getState().stepWizard;
            /* await new Promise(resolve => setTimeout(resolve, 1000));*/
            const response = await api.get(`/api/design-requests/${slug}`);

            dispatch(setSubmitted(true));
            dispatch(setSuccessData(response));
            return {success: true};
        } catch (error) {
            return rejectWithValue(error.message || 'Failed to submit data');
        } finally {
            dispatch(setSubmitting(false));
        }
    }
);
