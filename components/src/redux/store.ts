import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './slices/movieSlice';
import GenreReducer from "./slices/genreSlice";
import TVReducer from './slices/tvSlice';
import { movieApi } from '../services/movieApi'

export const store = configureStore({
    reducer: {
      [movieApi.reducerPath]: movieApi.reducer,
      movies: MovieReducer,
      genres: GenreReducer,
      tvs: TVReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch