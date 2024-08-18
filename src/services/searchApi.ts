import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    fetchSearch: builder.query({
      query: ({searchText, page}: {searchText: string, page: number}) => `search/multi?api_key=51ca1e241e720d72e2bb92a4b36859f5&language=en-US&query=${searchText}&page=${page}&include_adult=false`,
    }),
  }),
});

export const { useFetchSearchQuery } = searchApi;