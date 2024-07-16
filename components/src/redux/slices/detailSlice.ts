import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DetailData {
    id: number,
    backdrop_path: string,
    budget: number,
    genres: { id: number, name: string }[],
    origin_country: string[],
    release_date: string,
    tagline: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
    export interface DetailState {
    movieDetail: DetailData | null
  }
  const initialState: DetailState = {
    movieDetail: null
  }

export const detailSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
      setMovieDetail: (state, action: PayloadAction<DetailData>) => {
        state.movieDetail = action.payload
      },
    }
})
export const { setMovieDetail } = detailSlice.actions
export default detailSlice.reducer