import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface GenreData {
    id: number,
    name: string
}
export interface GenreState {
    genre: GenreData[]
}
const initialState: GenreState = {
    genre: []
}
export const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
       setGenre: (state, action: PayloadAction<GenreData[]>) => {
          state.genre = action.payload
       }
    }
})

export const { setGenre } = genreSlice.actions
export default genreSlice.reducer