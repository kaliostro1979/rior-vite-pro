import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { STEPS } from '@/constants/routes';
import { FloorPlanUploader, DesignUploader, DetailsForm } from '@/Components';

const Step = () => {
  const { id } = useParams();
  const currentStep = parseInt(id, 10) || STEPS.floorPlan;
  const navigate = useNavigate();
  

  const isSubmitted = useSelector(state => state.stepWizard.isSubmitted);

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
