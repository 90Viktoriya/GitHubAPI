import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './searchSlice.constants';
import { RepositoryInfo } from '../../../services/githubApi.types';
import { Order } from '../../ResultTable/EnhancedTableHead/EnhancedTableHead.type';
import { SelectedRepository } from './searchSlice.interface';

//Слайс для хранения необходимых данных для поиска
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
    },
    setOrderBy: (state, action: PayloadAction<keyof RepositoryInfo>) => {
      state.orderBy = action.payload;
    },
    setOrder: (state, action: PayloadAction<Order>) => {
      state.order = action.payload;
    },
    setSelectedRepository: (state, action: PayloadAction<SelectedRepository>) => {
      state.selectedRepository = action.payload;
    }
  }
});

export const { setCurrentPage, setSearchValue, setRowsPerPage, setOrderBy, setOrder, setSelectedRepository } =
  searchSlice.actions;

export default searchSlice.reducer;
