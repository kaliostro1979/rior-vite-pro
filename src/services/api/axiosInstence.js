// api.js
import axios from 'axios';

// Create the axios instance
const api = axios.create({
  baseURL: 'https://your-api-domain.com/api',
  timeout: 10000,
});

// Request interceptor (e.g., attach token)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // or your auth logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (global error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors globally
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          console.error('Bad Request:', data.message || data);
          break;
        case 401:
          console.warn('Unauthorized - maybe redirect to login');
          // e.g. logoutUser(); or window.location = '/login';
          break;
        case 403:
          console.warn('Forbidden:', data.message || data);
          break;
        case 404:
          console.warn('Not Found:', data.message || data);
          break;
        case 500:
          console.error('Server Error:', data.message || 'Internal Server Error');
          break;
        default:
          console.error('Error:', data.message || 'Something went wrong');
      }
    } else if (error.request) {
      console.error('No response from server:', error.message);
    } else {
      console.error('Request setup error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
