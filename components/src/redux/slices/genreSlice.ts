import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface GenreData {
    id: number,
    name: string
}
export interface GenreState {
    movieGenre: GenreData[]
    tvGenres: GenreData[]
}
const initialState: GenreState = {
    movieGenre: [],
    tvGenres: []
}
export const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
       setMovieGenre: (state, action: PayloadAction<GenreData[]>) => {
          state.movieGenre= action.payload
       },
       setTVGenres: (state, action: PayloadAction<GenreData[]>) => {
         state.tvGenres = action.payload
       }
    }
})

export const { setMovieGenre, setTVGenres } = genreSlice.actions
export default genreSlice.reducer