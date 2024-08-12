import { useAppSelector } from '../features/Redux/hooks';
import { useGetRepositoriesByNameQuery } from '../services/githubApi';

export function useGetRepositories() {
  const [searchValue, currentPage] = useAppSelector((state) => [state.searchValue, state.currentPage]);
  const { data } = useGetRepositoriesByNameQuery(searchValue, currentPage);
  return data?.data.search.nodes || [];
}
