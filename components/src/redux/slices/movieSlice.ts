import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MovieData {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
    export interface MovieState {
    nowPlaying: MovieData[], 
    popular: MovieData[],
    topRated: MovieData[],
    upcoming: MovieData[]
  }
  const initialState: MovieState = {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
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
      setUpcoming: (state, action: PayloadAction<MovieData[]>) => {
       state.upcoming = action.payload
      },
    }
})
export const { setNowPlaying, setPopular, setTopRated, setUpcoming } = movieSlice.actions
export default movieSlice.reducer