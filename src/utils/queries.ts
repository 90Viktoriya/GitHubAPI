import { gql } from 'graphql-request';
import { LANGUAGE_COUNT } from '../services/githubApi.constants';

class Queries {
  getRepositories(name: string, page: string, rowsPerPage: number) {
    return gql`{
      search(query: "${name}" type: REPOSITORY first: ${rowsPerPage} after: "${page}"){
        repositoryCount
        nodes {
          ... on Repository {
            name
            forkCount
            stargazerCount
            languages(first: ${LANGUAGE_COUNT}) {
              nodes {
                name
              }
            }
            updatedAt
          }
        }
        pageInfo {
          endCursor
        }
      }
    }`;
  }
}
export const queries = new Queries();
