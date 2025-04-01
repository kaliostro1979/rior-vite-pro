import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import '../src/styles/global/global.scss';
import '../src/styles/global/variables.scss';
import '../src/styles/global/typography.scss';
import { Provider } from 'react-redux';
import { store } from '@/store';

import './styles.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
