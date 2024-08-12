import { gql } from 'graphql-request';
import { COUNT_PER_PAGE, LANGUAGE_COUNT } from '../services/githubApi.constants';

class Queries {
  getRepositories(name: string) {
    return gql`{
      search(query: "${name}" type: REPOSITORY first: ${COUNT_PER_PAGE}){
        repositoryCount
        nodes {
          ... on Repository {
            description
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
      }
    }`;
  }
}
export const queries = new Queries();
