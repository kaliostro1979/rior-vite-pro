import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadDesign } from '@/store/actions/steps';
import { Floor } from '@/Components';

export const DesignUploader = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const designUrl = useSelector(state => state.stepWizard.designUrl);
  const designError = useSelector(state => state.stepWizard.errors.design);

  const handleFileChange = async e => {
    if (e.target.files && e.target.files[0]) {
      dispatch(uploadDesign(e.target.files[0]));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="max-w-[600px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Design</h2>
      <p className="text-gray-600 mb-6">
        Upload a PDF or PNG file of your design.
      </p>

      {designUrl ? (
        <div className="mb-6">
          <Floor preview={designUrl} />
          <button
            className="mt-4 text-blue-500 underline"
            onClick={handleButtonClick}
          >
            Replace Design
          </button>
        </div>
      ) : (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer mb-6"
          onClick={handleButtonClick}
        >
          <p className="mt-2 text-gray-600">Click to browse or drag and drop</p>
          <p className="text-sm text-gray-500">PDF or PNG (Max 10MB)</p>
        </div>
      )}

      {designError && <p className="text-red-500 mb-4">{designError}</p>}

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept=".pdf,.png"
        onChange={handleFileChange}
      />
    </div>
  );
};
