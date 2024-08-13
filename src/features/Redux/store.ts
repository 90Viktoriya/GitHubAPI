import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice/searchSlice';
import { githubApi } from '../../services/githubApi';

//конфигурация Redux store
export const store = configureStore({
  reducer: {
    search: searchReducer,
    [githubApi.reducerPath]: githubApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware)
});
