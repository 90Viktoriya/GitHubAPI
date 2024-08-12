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
