import searchState from './searchSlice.interface';

export const initialState: searchState = {
  currentPage: 1,
  searchValue: '',
  rowsPerPage: 10,
  orderBy: 'name',
  order: 'asc'
};
