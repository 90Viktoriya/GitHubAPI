import { useAppSelector } from '../features/Redux/hooks';
import { useGetRepositoryQuery } from '../services/githubApi';

//получение данных по деталям репозитория
export function useGetRepository() {
  const selectedRepository = useAppSelector((state) => state.search.selectedRepository);
  const { data, isFetching } = useGetRepositoryQuery(selectedRepository);
  return { details: data?.data?.repositoryOwner.repository, isFetching };
}
