import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './searchSlice.constants';
import { Order } from '../../ResultTable/EnhancedTableHead/EnhancedTableHead.type';
import { RepositoryRequest } from '../../../services/githubApi.types';

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
    setOrderBy: (state, action: PayloadAction<string>) => {
      state.orderBy = action.payload;
    },
    setOrder: (state, action: PayloadAction<Order>) => {
      state.order = action.payload;
    },
    setSelectedRepository: (state, action: PayloadAction<RepositoryRequest>) => {
      state.selectedRepository = action.payload;
    }
  }
});

export const { setCurrentPage, setSearchValue, setRowsPerPage, setOrderBy, setOrder, setSelectedRepository } =
  searchSlice.actions;

export default searchSlice.reducer;
