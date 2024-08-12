import { useAppSelector } from '../features/Redux/hooks';
import { useGetRepositoriesByNameQuery } from '../services/githubApi';

export function useGetRepositories() {
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const currentPage = useAppSelector((state) => state.search.currentPage);
  const rowsPerPage = useAppSelector((state) => state.search.rowsPerPage);
  const { data, isFetching } = useGetRepositoriesByNameQuery({ searchValue, currentPage, rowsPerPage });
  return { repositories: data?.data.search.nodes || [], isFetching, totalCount: data?.data.search.repositoryCount };
}
