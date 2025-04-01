import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { STEPS } from '@/constants/routes';
import { FloorPlanUploader, DesignUploader, DetailsForm } from '@/Components';
import { cleanupObjectUrls } from '@/store/actions/steps';

const Step = () => {
  const { id } = useParams();
  const currentStep = parseInt(id, 10) || STEPS.floorPlan;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSubmitted = useSelector(state => state.stepWizard.isSubmitted);

  useEffect(() => {
    return () => {
      dispatch(cleanupObjectUrls());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSubmitted) {
      navigate('/success');
    }
  }, [isSubmitted, navigate]);

  const renderStepContent = () => {
    switch (currentStep) {
      case STEPS.floorPlan:
        return <FloorPlanUploader />;
      case STEPS.design:
        return <DesignUploader />;
      case STEPS.details:
        return <DetailsForm />;
      default:
        return <div>Invalid step</div>;
    }
  };

  return <div className="step-container">{renderStepContent()}</div>;
};

export default Step;
