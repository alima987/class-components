import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './slices/movieSlice';
import GenreReducer from "./slices/genreSlice";
import TVReducer from './slices/tvSlice';
import { movieApi } from '../services/movieApi'
import { tvApi } from "../services/tvApi";

export const store = configureStore({
    reducer: {
      [movieApi.reducerPath]: movieApi.reducer,
      [tvApi.reducerPath]: tvApi.reducer,
      movies: MovieReducer,
      genres: GenreReducer,
      tvs: TVReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware, tvApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch