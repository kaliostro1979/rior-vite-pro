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
    project_name: details.project_name || '',
    ceiling_height: details.ceiling_height || 2.7,
    door_height: details.door_height || 0.9,
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
          name="project_name"
          placeholder="MyDream Home"
          label="Project Name"
          value={formData.project_name}
          onChange={handleChange}
          errorMessage={errors.project_name}
        />
        <CustomInput
          id="ceiling-height"
          type="number"
          name="ceiling_height"
          placeholder="2.7m"
          label="Ceiling Height"
          value={formData.ceiling_height}
          onChange={handleChange}
          errorMessage={errors.ceiling_height}
        />
        <CustomInput
          id="door-width"
          type="number"
          name="door_height"
          placeholder="0.80m"
          label="Door Width"
          value={formData.door_height}
          onChange={handleChange}
          errorMessage={errors.door_height}
        />
      </div>
    </div>
  );
};
