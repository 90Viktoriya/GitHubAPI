import { Order } from '../features/ResultTable/EnhancedTableHead/EnhancedTableHead.type';

type Language = {
  name: string;
};
type RepositoryOwner = {
  login: string;
};

//Данные по репозиторию
export type RepositoryInfo = {
  name: string;
  forkCount: string;
  stargazerCount: string;
  languages: {
    nodes: Language[];
  };
  updatedAt: string;
  owner: RepositoryOwner;
};

//Данные необходимые для поиска репозиториев
export type RepositoriesRequest = {
  searchValue: string;
  currentPage: number;
  rowsPerPage: number;
  orderBy: keyof RepositoryInfo;
  order: Order;
};

//Результат поиска репозиториев
export type RepositoriesResponse = {
  data: {
    search: {
      repositoryCount: number;
      nodes: RepositoryInfo[];
    };
  };
};

//Данные необходимые для получения деталей по репозиторию
export type RepositoryRequest = {
  name: string;
  login: string;
};

type LicenseInfo = {
  name: string;
};

type RepositoryDetails = {
  description: string;
  languages: {
    nodes: Language[];
  };
  licenseInfo: LicenseInfo;
  stargazerCount: number;
};

//Результат по запросу деталей
export type RepositoryResponse = {
  data: {
    repositoryOwner: {
      repository: RepositoryDetails;
    };
  };
};
