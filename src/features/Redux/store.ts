import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice/searchSlice';
import { githubApi } from '../../services/githubApi';
import { setupListeners } from '@reduxjs/toolkit/query';

//конфигурация Redux store
export const store = configureStore({
  reducer: {
    search: searchReducer,
    [githubApi.reducerPath]: githubApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware)
});

setupListeners(store.dispatch);
