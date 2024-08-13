import { RepositoryInfo } from '../../../services/githubApi.types';

//Интерфейс для ячейки заголовка таблицы
export interface HeadCell {
  id: keyof RepositoryInfo;
  label: string;
  isSortable: boolean;
}
