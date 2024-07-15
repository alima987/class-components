import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DetailData {
    id: string,
    backdrop_path: string,
    budget: number,
    genres: [
      {id: number, 
      name: string
    }
    ],
    origin_country: [
      string
    ],
    release_date: string,
    tagline: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
    export interface DetailState {
    movieDetail: DetailData[] 
  }
  const initialState: DetailState = {
    movieDetail: []
  }

export const detailSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
      setMovieDeatail: (state, action: PayloadAction<DetailData[]>) => {
        state.movieDetail = action.payload
      },
    }
})
export const { setMovieDeatail } = detailSlice.actions
export default detailSlice.reducer