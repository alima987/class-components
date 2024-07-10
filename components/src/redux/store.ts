import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './slices/movieSlice';
import GenreReducer from "./slices/genreSlice";
import TVReducer from './slices/tvSlice';

export const store = configureStore({
    reducer: {
      movies: MovieReducer,
      genres: GenreReducer,
      tvs: TVReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch