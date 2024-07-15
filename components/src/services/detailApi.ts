import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const detailApi = createApi({
  reducerPath: 'detailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    fetchMovieDetail: builder.query({
      query: ({movieId}: {movieId: number}) => `movie/${movieId}?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`,
    }),
  }),
});

export const { useFetchMovieDetailQuery } = detailApi;