import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MovieData {
  id: string,
  overview: string,
  vote_average: number,
  poster_path: string,
  title: string,
  backdrop_path: string
    }
    export interface MovieState {
    nowPlaying: MovieData[], 
    popular: MovieData[],
    topRated: MovieData[],
  }
  const initialState: MovieState = {
    nowPlaying: [],
    popular: [],
    topRated: [],
  }

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      setNowPlaying: (state, action: PayloadAction<MovieData[]>) => {
        state.nowPlaying = action.payload
      },
      setPopular: (state, action: PayloadAction<MovieData[]>) => {
        state.popular = action.payload
      },
      setTopRated: (state, action: PayloadAction<MovieData[]>) => {
        state.topRated = action.payload
      },
    }
})
export const { setNowPlaying, setPopular, setTopRated } = movieSlice.actions
export default movieSlice.reducer