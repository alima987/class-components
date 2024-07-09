import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MovieData {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
    export interface MovieState {
      data: MovieData[], 
  }
  const initialState: MovieState = {
      data: [],
  }

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      setMovie: (state, action: PayloadAction<MovieData[]>) => {
       state.data = action.payload
      },
    }
})
export const { setMovie } = movieSlice.actions
export default movieSlice.reducer