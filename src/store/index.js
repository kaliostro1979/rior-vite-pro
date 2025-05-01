import { configureStore } from '@reduxjs/toolkit';

import stepWizard from '@/store/slices/steps';
import similarProducts from "@/store/slices/similar-products/index.js";
import productsList from "@/store/slices/products-list/index.js";

export const store = configureStore({
  reducer: {
    stepWizard: stepWizard,
    similarProducts: similarProducts,
    productsList: productsList
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
