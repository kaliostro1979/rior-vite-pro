import { useMemo } from 'react';

export const useAreFieldsFilled = (formData, requiredFields) => {
  return useMemo(() => {
    return requiredFields.every(field => {
      const value = formData[field];

      return typeof value === 'string' ? value.trim() !== '' : Boolean(value);
    });
  }, [formData, requiredFields]);
};
