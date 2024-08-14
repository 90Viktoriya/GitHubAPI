import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RepositoriesRequest, RepositoriesResponse, RepositoryRequest, RepositoryResponse } from './githubApi.types';

export const githubApi = createApi({
  reducerPath: 'githubRepository',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getRepositoriesByName: builder.query<RepositoriesResponse, RepositoriesRequest>({
      query: ({ searchValue, currentPage, rowsPerPage, orderBy, order }) => ({
        url: `/search/repositories?q=${searchValue}&sort=${orderBy}&order=${order}&per_page=${rowsPerPage}&page=${currentPage}`,
        method: 'GET',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Authorization: `bearer ${import.meta.env.VITE_API_KEY}`
        }
      })
    }),
    getRepository: builder.query<RepositoryResponse, RepositoryRequest>({
      query: ({ name, login }) => ({
        url: `/repos/${login}/${name}`,
        method: 'GET',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Authorization: `bearer ${import.meta.env.VITE_API_KEY}`
        }
      })
    })
  })
});

export const { useGetRepositoriesByNameQuery, useGetRepositoryQuery } = githubApi;
