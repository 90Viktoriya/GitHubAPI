import { Order } from '../features/ResultTable/EnhancedTableHead/EnhancedTableHead.type';

type RepositoryOwner = {
  login: string;
};

//Данные по репозиторию
export type RepositoryInfo = {
  name: string;
  forks_count: string;
  stargazers_count: string;
  language: string;
  updated_at: string;
  pushed_at: string;
  created_at: string;
  owner: RepositoryOwner;
};

//Данные необходимые для поиска репозиториев
export type RepositoriesRequest = {
  searchValue: string;
  currentPage: number;
  rowsPerPage: number;
  orderBy: string;
  order: Order;
};

//Результат поиска репозиториев
export type RepositoriesResponse = {
  total_count: number;
  items: RepositoryInfo[];
};

//Данные необходимые для получения деталей по репозиторию
export type RepositoryRequest = {
  name: string;
  login: string;
};

//Результат по запросу деталей
export type RepositoryResponse = {
  description: string;
  language: string;
  license: {
    name: string;
  };
  stargazers_count: number;
};
