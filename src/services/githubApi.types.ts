//Data required for repositories request
export type RepositoriesRequest = {
  searchValue: string;
  currentPage: number;
  rowsPerPage: number;
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
type RepositoryInfo = {
  name: string;
  forkCount: string;
  stargazerCount: string;
  languages: {
    nodes: Language[];
  };
  updatedAt: string;
};

type Language = {
  name: string;
};
