import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './searchSlice.constants';

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.rowsPerPage = action.payload;
    }
  }
});

export const { setCurrentPage, setSearchValue, setRowsPerPage } = searchSlice.actions;

export default searchSlice.reducer;
