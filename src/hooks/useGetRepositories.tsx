import { useAppSelector } from '../features/Redux/hooks';
import { useGetRepositoriesByNameQuery } from '../services/githubApi';

export function useGetRepositories() {
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const currentPage = useAppSelector((state) => state.search.currentPage);
  const rowsPerPage = useAppSelector((state) => state.search.rowsPerPage);
  const orderBy = useAppSelector((state) => state.search.orderBy);
  const order = useAppSelector((state) => state.search.order);
  const { data, isFetching } = useGetRepositoriesByNameQuery({ searchValue, currentPage, rowsPerPage, orderBy, order });
  return { repositories: data?.data.search.nodes || [], isFetching, totalCount: data?.data.search.repositoryCount };
}
