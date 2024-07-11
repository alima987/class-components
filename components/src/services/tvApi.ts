import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tvApi = createApi({
  reducerPath: 'tvApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    fetchAiringToday: builder.query({
      query: () => 'tv/airing_today?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1',
    }),
    fetchTopRatedTV: builder.query({
      query: () => 'tv/top_rated?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1',
      }),
    fetchTVShows: builder.query({
      query: ({tvGenreId, page}: {tvGenreId: number, page: number}) => `discover/tv?with_genres=${tvGenreId}&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=${page}`,
    }),
  }),
});

export const { useFetchAiringTodayQuery, useFetchTopRatedTVQuery, useFetchTVShowsQuery } = tvApi;