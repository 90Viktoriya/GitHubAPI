import { Box, Typography } from '@mui/material';
import { useGetRepositories } from '../../../hooks/useGetRepositories';
import { Pagination } from '../../../features/Pagination/Pagination';
import { ResultTable } from '../../../features/ResultTable/ResultTable';
import { Loader } from '../../../components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../../features/Redux/hooks';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RouterParams } from '../../../features/Router/Router.enum';
import { setSearchValue, setCurrentPage, setSelectedRepository } from '../../../features/Redux/searchSlice/searchSlice';
import { initialState } from '../../../features/Redux/searchSlice/searchSlice.constants';
import { ComponentsCaptions } from '../../../data/ComponentsCaptions';
import { Details } from '../Details/Details';
import styles from './Result.module.sass';

export function Result() {
  const { isFetching } = useGetRepositories();
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const currentPage = useAppSelector((state) => state.search.currentPage);
  const selectedRepository = useAppSelector((state) => state.search.selectedRepository);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const details = searchParams.get(RouterParams.DETAILS);

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
    if (details && details !== `${selectedRepository.login}_${selectedRepository.name}`) {
      const [login, name] = details.split('_');
      dispatch(setSelectedRepository({ login, name }));
    }
  }, [
    currentPage,
    details,
    dispatch,
    location.search,
    searchParams,
    searchValue,
    selectedRepository.login,
    selectedRepository.name
  ]);

  return (
    <>
      <Box className={styles.results}>
        <Typography variant="h2">{ComponentsCaptions.SEARCH_RESULT}</Typography>
        {isFetching ? <Loader /> : <ResultTable />}
        <Pagination />
      </Box>
      <Box className={details ? styles.details : styles.empty}>
        {details ? <Details /> : <Typography>{ComponentsCaptions.REPOSITORY_REQUEST}</Typography>}
      </Box>
    </>
  );
}
