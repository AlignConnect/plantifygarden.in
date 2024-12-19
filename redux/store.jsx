
import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/products';
import productSlice from './slices/ProductInfo';


export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [productSlice.name]: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

