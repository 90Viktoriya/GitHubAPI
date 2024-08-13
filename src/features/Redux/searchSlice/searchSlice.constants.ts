import searchState from './searchSlice.interface';

//начальные значения для слайса по поиску
export const initialState: searchState = {
  currentPage: 1,
  searchValue: '',
  rowsPerPage: 10,
  orderBy: 'name',
  order: 'asc',
  selectedRepository: {
    name: '',
    login: ''
  }
};
