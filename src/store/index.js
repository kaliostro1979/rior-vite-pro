import { configureStore } from '@reduxjs/toolkit';

import stepWizard from '@/store/slices/steps';

export const store = configureStore({
  reducer: {
    stepWizard: stepWizard,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
