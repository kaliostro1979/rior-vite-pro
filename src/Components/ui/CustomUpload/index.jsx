import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { uploadFloorPlan } from '@/store/actions/steps';
import UploadIcon from '@/assets/icons/upload.svg';
import {CustomImage, FileUploadInput} from '@/Components/ui';

export const CustomUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileUpload = async file => {
    const resultAction = await dispatch(uploadFloorPlan(file));

    if (uploadFloorPlan.fulfilled.match(resultAction)) {
      navigate('/steps/step/1');
    }
  };

  return (
    <FileUploadInput
      heading={"Upload a plan or explore inspirations—click 'Upload' or drag and drop."}
      labelText={'Upload'}
      subheading={'Image'}
      size={'large'}
      icon={
        <CustomImage src={UploadIcon} alt={"Upload icon"} classes={"w-full h-full"}/>
      }
      id={'step-floor'}
      onFileSelected={handleFileUpload}
      name={"interior_photo"}
    />
  );
};
