import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { queries } from '../utils/queries';

export const githubApi = createApi({
  reducerPath: 'githubRepository',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/graphql' }),
  endpoints: (builder) => ({
    getCharactersByName: builder.query<Response, string>({
      query: (name) => ({
        url: ``,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${import.meta.env.VITE_API_KEY}`
        },
        body: JSON.stringify({ query: queries.getRepositories(name) })
      })
    })
  })
});

export const { useGetCharactersByNameQuery } = githubApi;
