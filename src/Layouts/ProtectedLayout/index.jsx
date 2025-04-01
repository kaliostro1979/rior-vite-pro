import { useAuth } from '@/context';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedLayout = props => {
  const { children } = props;
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Check authentication on initial render
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Return null to avoid rendering children
  }

  return <>{children}</>;
};
