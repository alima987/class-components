import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const genreApi = createApi({
  reducerPath: 'genreApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    fetchMovieGenre: builder.query({
      query: () => 'genre/movie/list?api_key=51ca1e241e720d72e2bb92a4b36859f5&language=en-US',
    }),
    fetchTVGenre: builder.query({
      query: () => 'genre/tv/list?api_key=51ca1e241e720d72e2bb92a4b36859f5&language=en-US',
    }),
  }),
});

export const { useFetchMovieGenreQuery, useFetchTVGenreQuery } = genreApi;
