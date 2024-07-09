import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './slices/movieSlice'
import GenreReducer from "./slices/genreSlice"

export const store = configureStore({
    reducer: {
      movies: MovieReducer,
      genres: GenreReducer
    }
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch