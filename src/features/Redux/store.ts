import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer
  }
});
