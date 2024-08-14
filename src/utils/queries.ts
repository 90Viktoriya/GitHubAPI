import { gql } from 'graphql-request';
import { LANGUAGE_COUNT, LANGUAGE_COUNT_IN_DETAILS } from '../services/githubApi.constants';

class Queries {
  //запрос на поиск репозиториев
  public getRepositories(name: string, page: string, rowsPerPage: number, order: string) {
    return gql`{
      search(query: "${name} ${order}" type: REPOSITORY first: ${rowsPerPage} after: "${page}"){
        repositoryCount
        nodes {
          ... on Repository {
            name
            owner {
              login
            }
            forkCount
            stargazerCount
            languages(first: ${LANGUAGE_COUNT}) {
              nodes {
                name
              }
            }
            updatedAt
            createdAt
            pushedAt
          }
        }
        pageInfo {
          endCursor
        }
      }
    }`;
  }

  //запрос на получение деталей по репозиторию
  public getRepository(name: string, login: string) {
    return gql`{
       repositoryOwner (login: "${login}") {
        repository (name: "${name}") {
          description
          languages(first: ${LANGUAGE_COUNT_IN_DETAILS}) {
            nodes {
              name
            }
          }
          stargazerCount
          licenseInfo {
            name
          }
        }
      }
    }`;
  }
}
export const queries = new Queries();
