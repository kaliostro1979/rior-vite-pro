import React, { useState } from 'react';
import '@/styles/global/typography.scss';
import '@/Components/ui/CustomButton/styles.scss';

export const FileUploadInput = ({
  heading,
  subheading,
  id,
  labelText,
  size = 'large',
  icon,
  onFileSelected, // Changed from action to callback function
  acceptTypes = '.pdf,.png',
  maxSize = 10 * 1024 * 1024, // 10MB default max size
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);

  // Handle drag events
  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // Validate file type and size
  const validateFile = file => {
    // Get file extension
    const fileExt = file.name.split('.').pop().toLowerCase();
    const validExts = acceptTypes
      .split(',')
      .map(type => (type.startsWith('.') ? type.substring(1) : type));

    // Check file type
    if (
      !validExts.includes(fileExt) &&
      !validExts.includes(`.${fileExt}`) &&
      !validExts.includes(file.type)
    ) {
      setError(`Invalid file type. Accepted types: ${acceptTypes}`);
      return false;
    }

    // Check file size
    if (file.size > maxSize) {
      setError(`File too large. Maximum size: ${maxSize / (1024 * 1024)}MB`);
      return false;
    }

    setError(null);
    return true;
  };

  // Handle file selection
  const handleFilesChange = event => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    if (validateFile(file) && onFileSelected) {
      onFileSelected(file);
    }
  };

  // Handle file drop
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file) && onFileSelected) {
        onFileSelected(file);
      }
    }
  };

  return (
    <div
      className={`flex justify-center items-center p-8 border border-dashed rounded-xl ${
        dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-label'
      }`}
      style={{ maxWidth: size === 'large' ? '100%' : '440px' }}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center gap-y-3 max-w-[291px]">
        <div className="w-[30px] h-[30px]">{icon}</div>
        <p className="paragraph-large text-center">{heading}</p>
        <span className="paragraph-small text-gray text-center">
          {subheading}
        </span>

        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}

        <input
          id={id}
          type="file"
          accept={acceptTypes}
          className="w-0 h-0 invisible"
          onChange={handleFilesChange}
        />
        <label
          htmlFor={id}
          className="button button-primary button__small cursor-pointer"
        >
          {labelText}
        </label>
      </div>
    </div>
  );
};
