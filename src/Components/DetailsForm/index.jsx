import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDetails, setStepCompleted } from '@/store/slices/steps';
import { CustomInput } from '@/Components/ui';
import { STEPS } from '@/constants';
import { DETAILS_FORM_INITIAL_STATE, REQUIRED_FIELDS } from './constants';
import { useAreFieldsFilled } from '@/hooks';

export const DetailsForm = () => {
  const dispatch = useDispatch();
  const details = useSelector(state => state.stepWizard.details);

  const [formData, setFormData] = useState({
    name: details.name || '',
    ceilingHeight: details.ceilingHeight || 2.7,
    doorWidth: details.doorWidth || 0.9,
  });

  const [errors, setErrors] = useState(DETAILS_FORM_INITIAL_STATE);

  const allFieldsFilled = useAreFieldsFilled(formData, REQUIRED_FIELDS);

  useEffect(() => {
    dispatch(updateDetails(formData));

    dispatch(
      setStepCompleted({
        step: STEPS.details,
        completed: allFieldsFilled,
      })
    );
  }, [formData, allFieldsFilled, dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div className="details-form">
      <h2 className="text-2xl font-semibold mb-6">Add Details</h2>
      <div className="space-y-6">
        <CustomInput
          id="project-name"
          type="text"
          name="name"
          placeholder="MyDream Home"
          label="Project Name"
          value={formData.name}
          onChange={handleChange}
          errorMessage={errors.name}
        />
        <CustomInput
          id="ceiling-height"
          type="number"
          name="ceilingHeight"
          placeholder="2.7m"
          label="Ceiling Height"
          value={formData.ceilingHeight}
          onChange={handleChange}
          errorMessage={errors.ceilingHeight}
        />
        <CustomInput
          id="door-width"
          type="number"
          name="doorWidth"
          placeholder="0.80m"
          label="Door Width"
          value={formData.doorWidth}
          onChange={handleChange}
          errorMessage={errors.doorWidth}
        />
      </div>
    </div>
  );
};
