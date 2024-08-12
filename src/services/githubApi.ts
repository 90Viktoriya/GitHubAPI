import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { queries } from '../utils/queries';
import { RepositoriesRequest, RepositoriesResponse } from './githubApi.types';

export const githubApi = createApi({
  reducerPath: 'githubRepository',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/graphql' }),
  endpoints: (builder) => ({
    getRepositoriesByName: builder.query<RepositoriesResponse, RepositoriesRequest>({
      query: ({ searchValue, currentPage, rowsPerPage }) => ({
        url: ``,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${import.meta.env.VITE_API_KEY}`
        },
        body: JSON.stringify({
          query: queries.getRepositories(searchValue, btoa(`cursor:${(currentPage - 1) * rowsPerPage}`), rowsPerPage)
        })
      })
    })
  })
});

export const { useGetRepositoriesByNameQuery } = githubApi;
