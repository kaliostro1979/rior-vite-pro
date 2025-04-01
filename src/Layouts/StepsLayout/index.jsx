import React, { useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTES, STEPS } from '@/constants/routes';
import { StepsNavigation } from '@/Components';
import { CustomButton } from '@/Components/ui';
import { setCurrentStep } from '@/store/slices/steps';
import { submitWizardData } from '@/store/actions/steps';

export const StepsLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const currentStep = parseInt(id, 10) || STEPS.floorPlan;

  const { stepsCompleted, isSubmitting } = useSelector(
    state => state.stepWizard
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
    if (currentStep === STEPS.floorPlan) {
      navigate(ROUTES.home);
    } else {
      navigate(`/steps/step/${currentStep - 1}`);
    }
  }, [currentStep, navigate]);

  const isNextButtonDisabled = !stepsCompleted[currentStep] || isSubmitting;

  return (
    <div className="steps-layout">
      <StepsNavigation />

      <div className="steps-content mb-[40px] w-full max-w-[800px] m-auto">
        {children}
      </div>

      <div className="flex justify-center items-center gap-x-[30px]">
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
