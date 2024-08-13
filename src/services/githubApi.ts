import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { queries } from '../utils/queries';
import { RepositoriesRequest, RepositoriesResponse, RepositoryRequest, RepositoryResponse } from './githubApi.types';

export const githubApi = createApi({
  reducerPath: 'githubRepository',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/graphql' }),
  endpoints: (builder) => ({
    getRepositoriesByName: builder.query<RepositoriesResponse, RepositoriesRequest>({
      query: ({ searchValue, currentPage, rowsPerPage, orderBy, order }) => ({
        url: ``,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${import.meta.env.VITE_API_KEY}`
        },
        body: JSON.stringify({
          query: queries.getRepositories(
            searchValue,
            btoa(`cursor:${(currentPage - 1) * rowsPerPage}`),
            rowsPerPage,
            orderBy === 'updatedAt' ? ` sort:updated-${order}` : ''
          )
        })
      })
    }),
    getRepository: builder.query<RepositoryResponse, RepositoryRequest>({
      query: ({ name, login }) => ({
        url: ``,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${import.meta.env.VITE_API_KEY}`
        },
        body: JSON.stringify({
          query: queries.getRepository(name, login)
        })
      })
    })
  })
});

export const { useGetRepositoriesByNameQuery, useGetRepositoryQuery } = githubApi;
