import { Paper } from '@mui/material';
import { useGetRepositories } from '../../../hooks/useGetRepositories';
import { Pagination } from '../../../features/Pagination/Pagination';
import { ResultTable } from '../../../features/ResultTable/ResultTable';
import { Loader } from '../../../components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../../features/Redux/hooks';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RouterParams } from '../../../features/Router/Router.enum';
import { setSearchValue, setCurrentPage } from '../../../features/Redux/searchSlice/searchSlice';
import { initialState } from '../../../features/Redux/searchSlice/searchSlice.constants';

export function Result() {
  const { isFetching } = useGetRepositories();
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const currentPage = useAppSelector((state) => state.search.currentPage);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  //change data if navigation using address bar
  useEffect(() => {
    const query = searchParams.get(RouterParams.QUERY);
    const page = searchParams.get(RouterParams.PAGE);
    if (query !== searchValue) {
      dispatch(setSearchValue(query ?? initialState.searchValue));
    }
    if (page !== currentPage) {
      dispatch(setCurrentPage(Number(page ?? initialState.currentPage)));
    }
  }, [currentPage, dispatch, location.search, searchParams, searchValue]);

  return (
    <Paper>
      {isFetching ? <Loader /> : <ResultTable />}
      <Pagination />
    </Paper>
  );
}
