import { Order } from '../features/ResultTable/EnhancedTableHead/EnhancedTableHead.type';

//Data required for repositories request
export type RepositoriesRequest = {
  searchValue: string;
  currentPage: number;
  rowsPerPage: number;
  orderBy: keyof RepositoryInfo;
  order: Order;
};

//Result for repositories request
export type RepositoriesResponse = {
  data: {
    search: {
      repositoryCount: number;
      nodes: RepositoryInfo[];
    };
  };
};
type RepositoryOwner = {
  login: string;
};
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

type Language = {
  name: string;
};

export type RepositoryRequest = {
  name: string;
  login: string;
};
export type RepositoryResponse = {
  data: {
    repositoryOwner: {
      repository: RepositoryDetails;
    };
  };
};
type RepositoryDetails = {
  description: string;
  languages: {
    nodes: Language[];
  };
  licenseInfo: LicenseInfo;
  stargazerCount: number;
};

type LicenseInfo = {
  name: string;
};
