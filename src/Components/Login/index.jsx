import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context';

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    if (isAuthenticated) {
      navigate('/');
      return;
    }

    const username = prompt('Enter your username (use "admin"):');
    if (!username) {
      alert('Login cancelled');
      return;
    }

    const password = prompt('Enter your password (use "password"):');
    if (!password) {
      alert('Login cancelled');
      return;
    }

    const success = login(username, password);

    if (success) {
      navigate('/');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }, [isAuthenticated, login, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Logging in...</p>
    </div>
  );
};

export default Login;
