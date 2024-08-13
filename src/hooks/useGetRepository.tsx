import { useAppSelector } from '../features/Redux/hooks';
import { useGetRepositoryQuery } from '../services/githubApi';

export function useGetRepository() {
  const selectedRepository = useAppSelector((state) => state.search.selectedRepository);
  const { data, isFetching } = useGetRepositoryQuery(selectedRepository);
  return { details: data?.data?.repositoryOwner.repository, isFetching };
}
