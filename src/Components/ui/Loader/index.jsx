import React from 'react';

export const Loader = ({
  size = 'medium',
  color = '#3b82f6',
  fullPage = false,
  message = 'Loading...',
  className,
}) => {
  const sizeClasses = {
    small: 'w-6 h-6 border-[3px]',
    medium: 'w-8 h-8 border-[4px]',
    large: 'w-10 h-10 border-[5px]',
  };

  return (
    <div
      className={`loader-container ${
        fullPage
          ? 'fixed inset-0 bg-black/30 flex items-center justify-center z-50'
          : ''
      } ${className}`}
    >
      <div
        className={`loader ${sizeClasses[size]} border-t-transparent animate-spin rounded-full`}
        style={{ borderColor: color }}
      />
      {message && <p className="mt-4 text-center text-gray-600">{message}</p>}
    </div>
  );
};
