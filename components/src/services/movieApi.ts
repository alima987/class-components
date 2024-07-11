import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    fetchNowPlaying: builder.query({
      query: () => 'movie/now_playing?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1',
    }),
    fetchTopRated: builder.query({
      query: () => `movie/top_rated?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1`
    }),
    fetchPopular: builder.query({
      query: ({genreId, page}: {genreId: number, page: number}) => `discover/movie?with_genres=${genreId}&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=${page}`
    })
  }),
});

export const { useFetchNowPlayingQuery, useFetchTopRatedQuery, useFetchPopularQuery } = movieApi;
