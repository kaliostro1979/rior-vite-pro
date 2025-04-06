import React, { useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTES, STEPS } from '@/constants/routes';
import { StepsNavigation } from '@/Components';
import {CustomButton, Toast} from '@/Components/ui';
import {setCurrentStep, setDesign, setDesignUrl, setFloorPlan, setFloorPlanUrl} from '@/store/slices/steps';
import { submitWizardData } from '@/store/actions/steps';

export const StepsLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const currentStep = parseInt(id, 10) || STEPS.floorPlan;

  const { stepsCompleted, isSubmitting, errors, floorPlanUrl } = useSelector(
    state => {
      console.log(state);
      return state.stepWizard
    }
  );

  const isLastStep = currentStep === STEPS.details;

  useEffect(() => {
    dispatch(setCurrentStep(currentStep));
  }, [currentStep, dispatch]);

  const handleNextStep = useCallback(() => {
    if (isLastStep) {
      dispatch(submitWizardData());
      return;
    }
    if (stepsCompleted[currentStep]) {
      navigate(`/steps/step/${currentStep + 1}`);
    } else {
      alert(`Please complete step ${currentStep} before proceeding.`);
    }
  }, [dispatch, isLastStep, navigate, currentStep, stepsCompleted]);

  const handleBack = useCallback(() => {
  /*  if (floorPlanUrl) {
      dispatch(setFloorPlan(null));
      dispatch(setFloorPlanUrl(null));
    } else {
      dispatch(setDesign(null));
      dispatch(setDesignUrl(null));
    }*/
    if (currentStep === STEPS.floorPlan) {
      navigate(ROUTES.home);
    } else {
      navigate(`/steps/step/${currentStep - 1}`);
    }
  }, [currentStep, navigate]);

  const isNextButtonDisabled = !stepsCompleted[currentStep] || isSubmitting;

 /* const step = Object.keys(STEPS).map((step) => step).filter((el) => el === currentStep);*/

  const foundError = Object.entries(STEPS)?.find(([_, value]) => value === currentStep)?.[0];

  return (
    <div className="steps-layout">
      
      <Toast message={errors[foundError]}/>
      <StepsNavigation />

      <div className="steps-content mb-[40px] w-full max-w-[800px] m-auto">
        {children}
      </div>

      <div className="flex justify-center items-center lg:gap-x-[30px] gap-x-4">
        <CustomButton
          button_type="secondary"
          size="large"
          type="button"
          text="Back"
          callback={handleBack}
          disabled={isSubmitting}
        />

        <CustomButton
          button_type="primary"
          size="large"
          type="button"
          text={isLastStep ? 'Submit' : 'Next'}
          callback={handleNextStep}
          disabled={isNextButtonDisabled}
          loading={isSubmitting}
        />
      </div>
    </div>
  );
};
