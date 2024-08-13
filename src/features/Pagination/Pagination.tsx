import { TablePagination } from '@mui/material';
import { useGetRepositories } from '../../hooks/useGetRepositories';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { useCallback } from 'react';
import { setRowsPerPage } from '../Redux/searchSlice/searchSlice';
import { initialState } from '../Redux/searchSlice/searchSlice.constants';
import { RouterParams } from '../Router/Router.enum';
import { useSearchParams } from 'react-router-dom';

export function Pagination() {
  const { totalCount } = useGetRepositories();
  const currentPage = useAppSelector((state) => state.search.currentPage);
  const rowsPerPage = useAppSelector((state) => state.search.rowsPerPage);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangePage = useCallback(
    (event: unknown, newPage: number) => {
      setSearchParams({
        [RouterParams.QUERY]: searchParams.get(RouterParams.QUERY) ?? '',
        [RouterParams.PAGE]: (newPage + 1).toString()
      });
    },
    [searchParams, setSearchParams]
  );
  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
      setSearchParams({
        [RouterParams.QUERY]: searchParams.get(RouterParams.QUERY) ?? '',
        [RouterParams.PAGE]: initialState.currentPage.toString()
      });
    },
    [dispatch, searchParams, setSearchParams]
  );
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={totalCount ? Math.min(totalCount, 1000) : 0} // Github allow a maximum of 1,000 results
      rowsPerPage={rowsPerPage}
      page={totalCount ? currentPage - 1 : 0}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
