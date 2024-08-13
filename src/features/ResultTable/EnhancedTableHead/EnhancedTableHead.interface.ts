import { RepositoryInfo } from '../../../services/githubApi.types';

export interface HeadCell {
  id: keyof RepositoryInfo;
  label: string;
  isSortable: boolean;
}
